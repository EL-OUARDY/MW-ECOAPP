import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { handleExpectedErrors, BadInput } from 'src/app/common/errors/http-errors';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { AdminProduct } from '../models/adminProduct';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  private readonly END_POINT = 'api/AdminProducts/';
  noAuth = new HttpHeaders({ 'NoAuth': 'true' }); // only for testing

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  getCategories() { // Extract it to category service
    return this.http.get('api/Categories', { headers: this.noAuth });
  }

  getShippings() {
    return ['GearBest', 'Ali Express', 'Other']; // available shipping methods
  }

  // calling the server

  GetProductsList(stock: string) {
    return this.http.get( this.END_POINT + '?stock=' + stock, { headers: this.noAuth });
  }

  PostProduct(form) {
    return this.http.post( this.END_POINT , form, { headers: this.noAuth }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  UpdateProduct( id: number, p: AdminProduct) {
    return this.http.put('/api/UpdateProducts/' + id.toString(), p, { headers: this.noAuth }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  GetLastProducts() {
    return this.http.get( this.END_POINT + 'History', { headers: this.noAuth });
  }

  getProduct(id: number) { // for updating products
    return this.http.get( this.END_POINT + id, { headers: this.noAuth }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  deleteProduct(id: number) {
    return this.http.delete( this.END_POINT + id , { headers: this.noAuth }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  // Shared Functions

  raiseConfirmDialog() {
    return this.dialog.open(ConfirmDialogComponent, {
      panelClass: 'confirm-dialog-container',
      // data: // a message can be passed
    }).afterClosed();
  }
}
