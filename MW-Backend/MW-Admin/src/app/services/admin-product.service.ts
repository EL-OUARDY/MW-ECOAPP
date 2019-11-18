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

  getShippings() {
    return ['GearBest', 'Ali Express', 'Other']; // available shipping methods
  }

  // calling the server

  GetProductsList(filter) {
    return this.http.get( this.END_POINT + '?' +  this.toQueryString(filter));
  }

  PostProduct(form) {
    return this.http.post( this.END_POINT , form).pipe(
      catchError(handleExpectedErrors)
    );
  }

  UpdateProduct( id: number, p: AdminProduct) {
    return this.http.put('/api/UpdateProducts/' + id.toString(), p).pipe(
      catchError(handleExpectedErrors)
    );
  }

  GetLastProducts() {
    return this.http.get( this.END_POINT + 'History');
  }

  getProduct(id: number) { // for updating products
    return this.http.get( this.END_POINT + id).pipe(
      catchError(handleExpectedErrors)
    );
  }

  deleteProduct(id: number) {
    return this.http.delete( this.END_POINT + id ).pipe(
      catchError(handleExpectedErrors)
    );
  }

  // Shared Functions

  toQueryString(obj) {
    const parts = [];
    if (obj.OnSale != null && obj.OnSale !== undefined) 
      parts.push('$filter=OnSale eq ' + obj.OnSale);

    console.log(parts.join('&'));
    return parts.join('&');
  }
  
  // toQueryString(obj) {
  //   const parts = [];
  //   for (const property in obj) {
  //     const value = obj[property];
  //     if (value != null && value !== undefined) 
  //       parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
  //   }
  //   return parts.join('&');
  // }

  raiseConfirmDialog() {
    return this.dialog.open(ConfirmDialogComponent, {
      panelClass: 'confirm-dialog-container',
      // data: // a message can be passed
    }).afterClosed();
  }
}
