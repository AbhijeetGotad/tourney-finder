import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CompetitionListComponent implements OnInit {
  title: any = 'All Competitions';

  items: any = [
    {
      img: 'https://static.vecteezy.com/system/resources/previews/012/884/036/non_2x/design-register-here-banner-with-megaphone-icon-flat-web-element-design-for-app-website-vector.jpg',
      title: 'Easy Registration',
      subTitle:
        'Cursus in hac habitasse platea dictumst quisque sagittis purus. Ac tortor dignissim convallis aenean.',
    },
    {
      img: 'https://img.freepik.com/premium-vector/business-team-competition-achievement-successful-challenge-business-concept-illustration_114835-108.jpg',
      title: 'View Competitions',
      subTitle:
        'Cursus in hac habitasse platea dictumst quisque sagittis purus. Ac tortor dignissim convallis aenean.',
    },
    {
      img: 'https://help.autodesk.com/cloudhelp/2023/ENU/Revit-WhatsNew/images/GUID-C478A3C6-4747-46BB-8A4A-5603BA6E0F3E.png',
      title: 'Apply Filters',
      subTitle:
        'Cursus in hac habitasse platea dictumst quisque sagittis purus. Ac tortor dignissim convallis aenean.',
    },
    {
      img: 'https://cdn.centraljersey.com/wp-content/uploads/sites/26/2016/02/calendar.jpg',
      title: 'Calender',
      subTitle:
        'Cursus in hac habitasse platea dictumst quisque sagittis purus. Ac tortor dignissim convallis aenean.',
    },
    {
      img: 'https://icons-for-free.com/iconfiles/png/512/bookmarks+favorite+favorites+favourite+like+love+icon-1320194037007016152.png',
      title: 'Favourites',
      subTitle:
        'Cursus in hac habitasse platea dictumst quisque sagittis purus. Ac tortor dignissim convallis aenean.',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router);

  }
}
