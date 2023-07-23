import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavBarComponent implements OnInit {
  menuList: any[] = [];
  urlnavigation: any;
  selectedItem: string = 'home';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setMenuList();
  }
  
  gotoMenuLink(menuItem: any): void {
    this.selectedItem = menuItem.name;
    let url = menuItem.route;
    if (url) {
      this.router.navigate([url]);
    }
  }

  setMenuList() {
    this.menuList = [
      {
        bu_menu_sequence: 1,
        displayName: 'Home',
        iconImage: 'sidebar-ico home-sidebar-ico',
        is_folder: 0,
        menuid: 'home',
        name: 'home',
        route: '/landing/homeUser',
        sequence: 1,
        shortDescription: '',
        isActive: 1,
      },
      {
        bu_menu_sequence: 2,
        displayName: 'Competitions',
        iconImage: 'sidebar-ico services-sidebar-ico',
        is_folder: 0,
        menuid: 'competitions',
        name: 'competitions',
        route: '/landing/competitions-list',
        sequence: 2,
        shortDescription: '',
        isActive: 1,
      },
      {
        bu_menu_sequence: 3,
        displayName: 'Turf',
        iconImage: 'sidebar-ico leadlist-sidebar-ico',
        is_folder: 0,
        menuid: 'turfs',
        name: 'turfs',
        route: '/landing/turfs-list',
        sequence: 3,
        shortDescription: '',
        isActive: 1,
      },
      {
        bu_menu_sequence: 4,
        displayName: 'My List',
        iconImage: 'sidebar-ico leadlist-sidebar-ico',
        is_folder: 0,
        menuid: 'mylist',
        name: 'mylist',
        route: '/landing/my-competitions-list',
        sequence: 3,
        shortDescription: '',
        isActive: 1,
      },
      {
        bu_menu_sequence: 5,
        displayName: 'Settings',
        iconImage: 'sidebar-ico settings-sidebar-ico',
        is_folder: 0,
        menuid: 'settings',
        name: 'settings',
        route: '/landing/settings',
        sequence: 4,
        shortDescription: '',
        isActive: 1,
      },
    ];
  }

  staticDataMenu(name: any, url: any) {
    this.selectedItem = name;
    this.router.navigate([url]);
  }
}
