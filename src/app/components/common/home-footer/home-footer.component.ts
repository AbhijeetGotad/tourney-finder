import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { SignUpService } from '../../core/misc/sign-up-page/signUp.service';
import { HomepageService } from '../../../module/homepage-root/services/homepage.service';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeFooterComponent implements OnInit, OnDestroy {
  footerDetail: any = 'Copyright © 2023 GBS Pvt. Ltd. All rights reserved.';

  constructor(
    public homePageService: HomepageService,
    private signUpService: SignUpService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.signUpService.setStatusFlag('');
  }
}
