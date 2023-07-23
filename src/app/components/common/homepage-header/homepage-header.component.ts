import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageService } from '../../../module/homepage-root/services/homepage.service';
import { LoginService } from '../../core/misc/login-page/login.service';
import { CookieService } from 'ngx-cookie-service';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { LoginPageComponent } from '../../core/misc/login-page/login-page.component';
import { SignUpPageComponent } from '../../core/misc/sign-up-page/sign-up-page.component';

@Component({
  selector: 'homepage-header',
  templateUrl: './homepage-header.component.html',
  styleUrls: ['./homepage-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomepageHeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private cookieService: CookieService,
    public homePageSer: HomepageService,
    public loginUserSer: LoginService,
    public dialog: NgDialogAnimationService
  ) {}

  ngOnInit() {}

  routeToHome() {
    this.homePageSer.loggedPage = false;
    this.loginUserSer.sessionLogin = false;
    this.router.navigateByUrl('/');
  }

  signupUser() {
    // this.homePageSer.loggedPage = true;

    this.dialog.open(SignUpPageComponent, {
      panelClass: 'rtl-dialog-box',
      width: '540px',
      height: '100vh',
      autoFocus: false,
      position: { right: '0' },
      animation: { to: 'left' },
    });

    // this.router.navigate(['/signup']);
  }

  loginUser() {
    // this.homePageSer.loggedPage = true;
    this.dialog.open(LoginPageComponent, {
      panelClass: 'rtl-dialog-box',
      width: '540px',
      height: '100vh',
      autoFocus: false,
      position: { right: '0' },
      animation: { to: 'left' },
    });

    // this.router.navigateByUrl('/login');
  }

  logoutUser() {
    this.cookieService.deleteAll();
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
}
