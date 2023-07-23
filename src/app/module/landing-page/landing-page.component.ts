import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage-root/services/homepage.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private homeSer:HomepageService) { }

  ngOnInit(): void {
    this.homeSer.loggedPage = true;
  }

}
