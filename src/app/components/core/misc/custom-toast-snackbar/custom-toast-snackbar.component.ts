import { Component, Inject, OnInit,ViewEncapsulation } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-toast-snackbar',
  templateUrl: './custom-toast-snackbar.component.html',
  styleUrls: ['./custom-toast-snackbar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CustomToastSnackbarComponent implements OnInit {

  // matIcon: any;
  messageIcon: any;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, private _snackRef: MatSnackBarRef<CustomToastSnackbarComponent> ) {}

  ngOnInit(): void {
    if (this.data.title == "Error") {
      // this.matIcon = "error_outline";
      this.messageIcon = "error-ico";
    } else if (this.data.title == "Success") {
      // this.matIcon = "check_circle_outline";
      this.messageIcon = "success-ico";
    } else if (this.data.title == "Info") {
      // this.matIcon = "info_outline";
      this.messageIcon = "info-ico";
    }
  }
  dismiss() {
    this._snackRef.dismiss();
  }
}
