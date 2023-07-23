import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-seven',
  templateUrl: './section-seven.component.html',
  styleUrls: ['./section-seven.component.css']
})
export class SectionSevenComponent implements OnInit {
  sectionSixData: any = {
    headline: 'Lorem ipsum dolor sit amet',
    subHeadline:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Ut eu sem integer vitae justo eget. Libero id faucibus nisl tincidunt eget nullam non nisi est.',
  };

  constructor() {}

  ngOnInit(): void {}
}
