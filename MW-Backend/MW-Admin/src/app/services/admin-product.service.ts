import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { handleExpectedErrors, BadInput } from 'src/app/common/errors/http-errors';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  noAuth = new HttpHeaders({ 'NoAuth': 'true' }); // only for testing
  constructor(private http: HttpClient, private dialog: MatDialog) { }

  getCategories() { // move to category service
    return this.http.get('api/Categories', { headers: this.noAuth });
  }

  getShippings() {
    return ['GearBest', 'Ali Express', 'Other']; // available shipping methods
  }

  // calling the server


  GetProductsList(stock: string) {
    return this.http.get('api/AdminProducts?stock=' + stock, { headers: this.noAuth });
  }

  PostProduct(form) {
    return this.http.post('api/AdminProducts', form, { headers: this.noAuth }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  UploadImages(form: FormData) {
    return this.http.post('api/AdminProducts/upload-images', form, { headers: this.noAuth }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  GetLastProducts() {
    return this.http.get('api/AdminProducts/History', { headers: this.noAuth });
  }

  getProduct(id: number) { // for updating products
    return this.http.get('api/AdminProducts/' + id, { headers: this.noAuth }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  deleteProduct(id: number) {
    return this.http.delete('api/AdminProducts/' + id , { headers: this.noAuth }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  raiseConfirmDialog() {
    return this.dialog.open(ConfirmDialogComponent, {
      panelClass: 'confirm-dialog-container',
      // data: // a message can be passed
    }).afterClosed();
  }
}
