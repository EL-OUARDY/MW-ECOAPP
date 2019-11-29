import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { AdminProduct } from '../models/adminProduct';
import { handleExpectedErrors } from '../shared/errors/http-errors';
import { QueryObject } from '../shared/QueryObject';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  private readonly END_POINT = 'api/AdminProducts/';

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
    return this.http.put('/api/UpdateProduct/' + id.toString(), p).pipe(
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

  deleteRange(Ids: number[]) {
    return this.http.post( '/api/DeleteRange/', Ids ).pipe(
      catchError(handleExpectedErrors)
    );
  }

  // Shared Functions
  toQueryString(obj: QueryObject) {
    const parts = [];

    if ( obj.OnSale != null )
      parts.push('$filter=OnSale eq ' + obj.OnSale);
    
    parts.push('$top=' + obj.PageSize);

    parts.push('$skip=' + (obj.CurrentPage * obj.PageSize));

    if (obj.CategoryId) {
      if (!obj.SubCategoryId || obj.SubCategoryId === 0) {
        parts.push('$filter=CategoryId eq ' + obj.CategoryId);
      } else {
        parts.push('$filter=SubCategoryId eq ' + obj.SubCategoryId);
      }
    }

    if (obj.Search) {
      const key = obj.Search.charAt(0);
      const key2 = obj.Search.substr(0, 1);

      console.log(key);
      console.log(key2);
      
      
      switch (key) {
        case '#':
          parts.push('$filter=Id eq ' + obj.Search);
          break;
        
        case '+':
          parts.push('$filter=Price gt ' + obj.Search);
          break;
        
        default:
          parts.push('$filter=Name eq ' + obj.Search);
          break;
      }

      if (obj.Search.startsWith('#')) 
        parts.push('$filter=Id eq ' + obj.Search.slice());
      else parts.push('$filter=Name eq ' + obj.Search);
    }

    if (obj.OrderBy) {
      const isAsc = obj.IsSortAscending ? 'Asc' : 'Desc';
      parts.push('$orderby=' + obj.OrderBy + ' ' + isAsc);
    }
    parts.push('$count=true');
    
    return parts.join('&');
  }
  
  private hasValue(value) {
    return value !== null && value !== undefined;
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
