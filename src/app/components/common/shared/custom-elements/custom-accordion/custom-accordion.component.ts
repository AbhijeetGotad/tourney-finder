import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-accordion',
  templateUrl: './custom-accordion.component.html',
  styleUrls: ['./custom-accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomAccordionComponent implements OnInit {
  options = { multi: false };
  @Input() accordianData: any;

  constructor() {}

  ngOnInit(): void {}
  toggle(index: number) {
    this.accordianData
      .filter((menu: any, i: any) => i !== index && menu.active)
      .forEach((menu: any) => (menu.active = !menu.active));
    this.accordianData[index].active = !this.accordianData[index].active;
  }
}
