import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ConfirmationModalComponent implements OnInit {
  public message: string = '';
  public title: string = 'Warning';
  public yesBtn: string = 'Confirm';
  public noBtn: string = 'Cancel';
  public messageIcon: string = '';
  public modalCls: string = '';
  public dismissCallback: (reason: string) => {};
  constructor(
    public activeModal: MatDialog,
    public dialogRef: MatDialogRef<ConfirmationModalComponent>
  ) {}

  ngOnInit(): void {}
  dismiss(reason: string) {
    if (this.dismissCallback) {
      this.dismissCallback(reason);
    }
    this.dialogRef.close();
  }
}
