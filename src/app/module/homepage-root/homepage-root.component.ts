import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../../components/core/misc/login-page/login.service';
import { MessageModalService } from '../../core/services/message-modal-service';
import { HomepageService } from './services/homepage.service';

@Component({
  selector: 'app-homepage-root',
  templateUrl: './homepage-root.component.html',
  styleUrls: ['./homepage-root.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomepageRootComponent implements OnInit {

  constructor(
    public homePageSer: HomepageService,
    public modalService: MessageModalService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.homePageSer.loggedPage = false;
    this.loginService.sessionLogin = false;
  }
}
