import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-section-six',
  templateUrl: './section-six.component.html',
  styleUrls: ['./section-six.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SectionSixComponent implements OnInit {
  sectionFiveData: any = [
    {
      name: 'Question 1',
      submenu: [{ name: 'Answer 1' }],
    },
    {
      name: 'Question 2',
      submenu: [{ name: 'Answer 1' }, { name: 'Answer 2' }],
    },
    {
      name: 'Question 3',
      submenu: [
        { name: 'Answer 1' },
        { name: 'Answer 2' },
        { name: 'Answer 3' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
