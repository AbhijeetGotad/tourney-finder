import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SectionThreeComponent implements OnInit {
  title1: any = 'Eleifend donec pretium vulputate';
  title2: any = 'Odio morbi quis.';
  title3: any =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  constructor() {}

  ngOnInit(): void {}
}
