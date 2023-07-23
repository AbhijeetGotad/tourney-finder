import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SectionTwoComponent implements OnInit {
    sectionTwoData: any = {
    headline: 'In hendrerit gravida rutrum quisque non tellus orci',
    subHeadline:
      ' Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Congue eu consequat ac felis donec',
  };
  sectionTwoSubData: any = [
    {
      icon: 'https://shorturl.at/crST9',
      name: 'Lorem ipsum dolor sit amet',
      description: 'chess desc',
    },
    {
      icon: 'https://shorturl.at/crST9',
      name: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Cras ornare arcu dui vivamus. Tincidunt id aliquet risus feugiat in ante metus. Pretium lectus quam id leo in vitae turpis.',
    },
    {
      icon: 'https://shorturl.at/crST9',
      name: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Cras ornare arcu dui vivamus. Tincidunt id aliquet risus feugiat in ante metus. Pretium lectus quam id leo in vitae turpis.',
    },
    {
      icon: 'https://shorturl.at/crST9',
      name: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Cras ornare arcu dui vivamus. Tincidunt id aliquet risus feugiat in ante metus. Pretium lectus quam id leo in vitae turpis.',
    },
    {
      icon: 'https://shorturl.at/crST9',
      name: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Cras ornare arcu dui vivamus. Tincidunt id aliquet risus feugiat in ante metus. Pretium lectus quam id leo in vitae turpis.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
