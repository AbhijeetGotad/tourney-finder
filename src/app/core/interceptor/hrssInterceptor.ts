import { Injectable } from '@angular/core';

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Config } from '../config/config';
import {
  catchError,
  switchMap,
  finalize,
  filter,
  take,
  map,
} from 'rxjs/operators';
import { LoadingSpinnerService } from 'src/app/components/common/shared/loading-spinner/loading-spinner.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
// import 'rxjs/add/operator/map'

@Injectable()
export class HrssInterceptor implements HttpInterceptor {
  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private loaderSrv: LoadingSpinnerService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let skipLoader =
      (typeof req.params.get('skipLoader') != 'undefined' &&
        req.params.get('skipLoader')) ||
      req.method == 'GET' ||
      Config.isUserOnChatBot;
    let overrideLoader =
      typeof req.params.get('skipLoader') != 'undefined' &&
      req.params.get('skipLoader');
    skipLoader = overrideLoader ? false : skipLoader;
    // if (Config.loggedIn && this.additionalConditions(req)) {
    // Clone the request and set the new header in one step.
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer 99d4732ba8e3fc14c309d73bd19f0077624b92b9ccd667471c7d4ccf6fbe3173d0c07ae8460afe91eba5841737175b369b74d0df48b22d0ad03fb5e6a2a762d865e168a855f8da4b1467d9a9f694618327055ff367462417cb95486996c81db02b2e4755db97da4ee34c76330406f7378219f195e77e7a110a702e881ee9c5a0`,
      },
      withCredentials: true,
    });
    // } else {}

    return next
      .handle(req)
      .pipe((event: any) => {
        if (event instanceof HttpResponse && this.additionalConditions(req)) {
          !skipLoader && this.loaderSrv.hideLoaderOnCount();
        }
        return event;
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (this.additionalConditions(req)) {
            !skipLoader && this.loaderSrv.hideLoaderOnCount();
          }
          return this.handleError(req, error, next);
        })
      );
  }

  handleError(
    _req: HttpRequest<any>,
    err: HttpErrorResponse,
    next: HttpHandler
  ): any {
    if (err instanceof HttpErrorResponse) {
      if (
        this.additionalConditions(_req) ||
        _req.url.includes('refreshToken')
      ) {
        switch ((<HttpErrorResponse>err).status) {
          case 401:
            this.handle401Error();
            return throwError(err);
          default:
            return throwError(err);
        }
      }
    }
    return throwError(err);
  }
  handle401Error() {
    if (Config.loggedIn) {
    } else {
      this.cookieService.deleteAll();
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    }
  }

  additionalConditions(request: HttpRequest<any>) {
    return !request.url.endsWith('environment.json');
  }
}
