import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-section-five',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SectionFiveComponent implements OnInit {
  dataCount: any = [
    {
      count: '50+',
      name: 'Sports',
      description: 'Nisl rhoncus mattis rhoncus urna neque viverra justo nec.',
    },
    {
      count: '50+',
      name: 'Competitions',
      description: 'Nisl rhoncus mattis rhoncus urna neque viverra justo nec.',
    },
    {
      count: '50+',
      name: 'Organisers',
      description: 'Nisl rhoncus mattis rhoncus urna neque viverra justo nec.',
    },
    {
      count: '50+',
      name: 'Players',
      description: 'Nisl rhoncus mattis rhoncus urna neque viverra justo nec.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
