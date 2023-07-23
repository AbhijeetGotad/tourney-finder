import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turf-tab',
  templateUrl: './turf-tab.component.html',
  styleUrls: ['./turf-tab.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TurfTabComponent implements OnInit {
  searchOn: boolean = false;
  menuList: any[] = [];
  selectedGame: any = {
    displayName: 'All',
    iconImage:
      'https://img.freepik.com/premium-vector/realistic-chess-pieces-chessboard-set_208581-1470.jpg',
    sequence: 1,
    route: '/landing/competitions-list',
    shortDescription: '',
    subMenuList: [],
    isActive: 1,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setMenuList();
  }

  setMenuList() {
    this.menuList = [
      {
        displayName: 'All',
        iconImage:
          'https://img.freepik.com/premium-vector/realistic-chess-pieces-chessboard-set_208581-1470.jpg',
        sequence: 1,
        route: '/landing/competitions-list',
        shortDescription: '',
        subMenuList: [],
        isActive: 1,
      },
      {
        displayName: 'Chess',
        iconImage:
          'https://img.freepik.com/premium-vector/realistic-chess-pieces-chessboard-set_208581-1470.jpg',
        sequence: 1,
        route: '/landing/competitions-list',
        shortDescription: '',
        subMenuList: [],
        isActive: 1,
      },
      {
        displayName: 'Cricket',
        iconImage:
          'https://static.vecteezy.com/system/resources/previews/001/988/262/original/cricket-match-concept-with-stadium-and-background-free-vector.jpg',
        sequence: 2,
        route: '/landing/competitions-list',
        shortDescription: '',
        subMenuList: [],
        isActive: 1,
      },
    ];
  }

  navigate(menuItem) {
    this.selectedGame = menuItem;
  }
}
