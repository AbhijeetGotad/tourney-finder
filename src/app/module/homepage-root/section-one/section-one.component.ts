import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { LoginPageComponent } from 'src/app/components/core/misc/login-page/login-page.component';
import { SignUpPageComponent } from 'src/app/components/core/misc/sign-up-page/sign-up-page.component';

@Component({
  selector: 'app-home-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SectionOneComponent implements OnInit {
  title1: any = 'Eleifend donec pretium vulputate';
  title2: any = 'Odio morbi quis.';
  title3: any =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  constructor(public dialog: NgDialogAnimationService) {}

  ngOnInit(): void {}

  login(){
    this.dialog.open(LoginPageComponent, {
      panelClass: 'rtl-dialog-box',
      width: '540px',
      height: '100vh',
      autoFocus: false,
      position: { right: '0' },
      animation: { to: 'left' },
    });
  }

  signUp(){
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
