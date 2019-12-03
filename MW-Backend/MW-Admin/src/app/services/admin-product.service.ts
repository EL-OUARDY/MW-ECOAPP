import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../shared/dialogs/confirm-dialog/confirm-dialog.component';
import { AdminProduct } from '../models/adminProduct';
import { handleExpectedErrors } from '../shared/errors/http-errors';
import { ProductFilter } from '../shared/ProductFilter';
import { InfosDialogComponent } from '../shared/dialogs/infos/infos-dialog.component';

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
  toQueryString(obj: ProductFilter) {
    const parts = [];
    const filter = [];

    if ( obj.OnSale != null )
      filter.push(' OnSale eq ' + obj.OnSale);

    if (obj.CategoryId) {
      if (!obj.SubCategoryId || obj.SubCategoryId === 0) {
        filter.push(' CategoryId eq ' + obj.CategoryId);
      } else {
        filter.push(' SubCategoryId eq ' + obj.SubCategoryId);
      }
    }

    if (obj.Search) {
      if (this.isComplexSearchQuery(obj.Search)) {
        const formatted = this.formatSearchQuery(obj.Search);
        filter.push(formatted);
      } else
        filter.push(" contains(tolower(Name), '" + obj.Search + "')");
    }

    if (filter.length > 0) {
      console.log('Filter: ', filter.join(' and '));
      parts.push(`$apply=filter(${filter.join(' and ')})`);
    }

    const isAsc = obj.IsSortAscending ? 'Asc' : 'Desc';
    parts.push('$orderby=' + obj.OrderBy + ' ' + isAsc);
    
    parts.push('$top=' + obj.PageSize);
    parts.push('$skip=' + (obj.CurrentPage * obj.PageSize));
    parts.push('$count=true');

    console.log(parts.join('&'));
    return parts.join('&');
  }

  formatSearchQuery(search: string) {
    let formatted;
    if (search.charAt(0) === '#') {
      formatted = 'Id eq ' + search.replace('#', '');
    }
    if (search.charAt(0) === '$') {
      formatted = search.replace('$', '') // how to replace all $ in string
                        .replace(/>=/g, ' ge ')
                        .replace(/<=/g, ' le ')
                        .replace(/!=/g, ' ne ')
                        .replace(/=/g, ' eq ')
                        .replace(/>/g, ' gt ')
                        .replace(/</g, ' lt ');
    }
    return formatted;
  }

  isComplexSearchQuery(search: string) {
    if (search.charAt(0) === '$' || search.charAt(0) === '#')
      return true;
    return false;
  }
  
  private hasValue(value) {
    return value !== null && value !== undefined;
  }

  raiseConfirmDialog() {
    return this.dialog.open(ConfirmDialogComponent, {
      panelClass: 'confirm-dialog',
      data: {message: 'Are you sure ?!'}
    }).afterClosed();
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

  // switch (key) {
  //   case '#':
  //     parts.push('$filter=Id eq ' + rawSearch);
  //     break;
    
  //   case '+':
  //     parts.push('$filter=Price gt ' + rawSearch);
  //     break;

  //   case '-':
  //     parts.push('$filter=Price lt ' + rawSearch);
  //     break;

  //   case '=':
  //     parts.push('$filter=Price eq ' + rawSearch);
  //     break;

  //   default:
  //     parts.push("$filter=Name eq '" + obj.Search + "'");
  //     break;
  // }

}
