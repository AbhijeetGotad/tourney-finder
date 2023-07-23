import {
  Component,
  OnInit,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login-page/login.service';
import { SignUpService } from './signUp.service';
import { Router } from '@angular/router';
import { MessageModalService } from '../../../../../app/core/services/message-modal-service';
import { HomepageService } from '../../../../../app/module/homepage-root/services/homepage.service';
import { Config } from 'src/app/core/config/config';
import { Subscription } from 'rxjs';
import { LoginPageComponent } from '../login-page/login-page.component';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { MatDialogRef } from '@angular/material/dialog';
const nacl = require('tweetnacl');

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignUpPageComponent implements OnInit {
  signupForm: FormGroup;
  hide: boolean = true;
  error_message: any = '';

  constructor(
    public dialog: NgDialogAnimationService,
    private dialogRefSelf: MatDialogRef<LoginPageComponent>
  ) {}

  ngOnInit(): void {
    // this.homeSer.loggedPage = true;
    this.initaliseForm();
  }

  initaliseForm() {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      phone: new FormControl('', Validators.required),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(Config.pwdRegex),
        ])
      ),
      role: new FormControl('', Validators.required),
      orgName: new FormControl(''),
      orgPhone: new FormControl(''),
    });
  }

  getErrorMessage(type: any) {
    if (
      this.signupForm.controls['firstName'].hasError('required') &&
      type == 'firstName'
    ) {
      return 'First Name is required';
    } else if (
      this.signupForm.controls['lastName'].hasError('required') &&
      type == 'lastName'
    ) {
      return 'Last Name is required';
    } else if (
      this.signupForm.controls['email'].hasError('required') &&
      type == 'email'
    ) {
      return 'Email ID is required';
    } else if (
      this.signupForm.controls['password'].hasError('required') &&
      type == 'pwd'
    ) {
      return 'Password is required';
    } else {
      return '';
    }
  }

  clearError() {
    this.error_message = '';
  }

  login() {
    this.dialogRefSelf.close();
    this.dialog.open(LoginPageComponent, {
      panelClass: 'rtl-dialog-box',
      width: '540px',
      height: '100vh',
      autoFocus: false,
      position: { right: '0' },
      animation: { to: 'left' },
    });
  }
}
