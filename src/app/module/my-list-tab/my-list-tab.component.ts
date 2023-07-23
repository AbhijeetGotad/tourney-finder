import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddCompetitionModelComponent } from '../modals/add-competition-model/add-competition-model.component';
import { MatDialog } from '@angular/material/dialog';
import { AddTurfModalComponent } from '../modals/add-turf-modal/add-turf-modal.component';

@Component({
  selector: 'app-my-list-tab',
  templateUrl: './my-list-tab.component.html',
  styleUrls: ['./my-list-tab.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MyListTabComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addNewCompetition() {
    this.dialog.open(AddCompetitionModelComponent);
  }

  addNewTurf() {
    this.dialog.open(AddTurfModalComponent);
  }
}
