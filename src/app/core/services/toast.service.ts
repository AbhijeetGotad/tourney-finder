import { Injectable } from '@angular/core';
// import { CustomToastSnackbarComponent } from '../../components/shared/custom-toast-snackbar/custom-toast-snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomToastSnackbarComponent } from 'src/app/components/core/misc/custom-toast-snackbar/custom-toast-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private _snackBar: MatSnackBar,
  ) { }

  successToast(msg:any) {
    this._snackBar.openFromComponent(CustomToastSnackbarComponent, {
      duration: 5000,
      panelClass: ["success-outline-snackbar"],
      data: {
        title: 'Success',
        message: msg,
      },
    });
  }

  infoToast(msg : any) {
    this._snackBar.openFromComponent(CustomToastSnackbarComponent, {
      duration: 5000,
      panelClass: ["info-outline-snackbar"],
      data: {
        title: 'Info',
        message: msg,
      },
    });
  }

  errorToast(msg:any) {
    this._snackBar.openFromComponent(CustomToastSnackbarComponent, {
      duration: 5000,
      panelClass: ["error-outline-snackbar"],
      data: {
        title: 'Error',
        message: msg,
      },
    });
  }

}
