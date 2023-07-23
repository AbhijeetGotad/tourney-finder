import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Config } from 'src/app/core/config/config';
import { HomepageService } from '../../../../module/homepage-root/services/homepage.service';
import { SignUpService } from '../sign-up-page/signUp.service';
import { LoginService } from './login.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/core/services/toast.service';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { SignUpPageComponent } from '../sign-up-page/sign-up-page.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginPageComponent implements OnInit {
  hide: boolean = true;
  logformdata: FormGroup = new FormGroup({
    userName: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl('', Validators.compose([Validators.required])),
  });
  error_message: any = '';

  constructor(
    public loginSrv: LoginService,
    private router: Router,
    public dialog: NgDialogAnimationService,
    private homepageSer: HomepageService,
    public signup: SignUpService,
    private cookieService: CookieService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRefSelf: MatDialogRef<LoginPageComponent>
  ) {
    this.cookieService.deleteAll();
    this.cookieService.deleteAll('/', Config.baseUrl);
  }

  ngOnInit(): void {
    // this.homepageSer.loggedPage = true;
    if (!this.signup.isSignUp) {
      this.loginSrv.email = '';
    } else {
      this.logformdata.get('userName')?.patchValue(this.loginSrv.email);
    }
  }

  getErrorMessage(type: any) {
    if (
      this.logformdata.controls['userName'].hasError('required') &&
      type == 'email'
    ) {
      return 'Email ID is required';
    } else if (
      this.logformdata.controls['password'].hasError('required') &&
      type == 'pwd'
    ) {
      return 'Password is required';
    } else {
      return '';
    }
  }

  clearPassword() {}

  generateKeyPair() {
    this.toastService.successToast('Login Successful');
    this.loginSrv.email = this.logformdata.value.userName;
    this.loginSrv.mobile = '9898989898';
    Config.loggedIn = true;
    this.loginSrv.sessionLogin = true;
    this.homepageSer.loggedPage = true;
    this.router.navigateByUrl('/landing/homeUser');
    this.dialogRefSelf.close();
  }

  clearError() {
    this.error_message = '';
  }

  signUp() {
    this.dialogRefSelf.close();
    this.dialog.open(SignUpPageComponent, {
      panelClass: 'rtl-dialog-box',
      width: '540px',
      height: '100vh',
      autoFocus: false,
      position: { right: '0' },
      animation: { to: 'left' },
    });
  }
}
