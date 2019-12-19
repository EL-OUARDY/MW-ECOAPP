import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { VariantComponent } from '../product/variant/variant.component';
import { ConfirmDialogComponent } from '../shared/dialogs/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  config: MatDialogConfig;

  constructor(private dialog: MatDialog) {
  }

  openVariantsDialog(id) {
    return this.dialog.open(VariantComponent, {
      data: {id: id },
      width: '950px',
      height: '470px'
    });
  }

  raiseConfirmDialog(message?: string) {
    return this.dialog.open(ConfirmDialogComponent, {
      panelClass: 'confirm-dialog',
      data: {message: message || 'Are you sure ?!'}
    }).afterClosed();
  }
}
