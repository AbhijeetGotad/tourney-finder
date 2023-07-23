import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgDialogAnimationService } from 'ng-dialog-animation';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class UserHomeComponent implements OnInit {

  constructor(public dialog: NgDialogAnimationService) { }

  ngOnInit(): void {
  }

}
