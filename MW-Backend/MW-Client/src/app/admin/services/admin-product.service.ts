import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { handleExpectedErrors, BadInput } from 'src/app/common/errors/http-errors';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  noAuth = new HttpHeaders({ 'NoAuth': 'true' }); // only for testing
  constructor(private http: HttpClient) { }

  getCategories() {

    return this.http.get('api/Categories', { headers: this.noAuth });
  }

  getShippings() {
    return ['GearBest', 'Ali Express', 'Other']; // available shipping methods
  }

  // calling the server

  PostProduct(form) {
    return this.http.post('api/Products', form, { headers: this.noAuth }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  UploadImages(form: FormData) {
    return this.http.post('api/upload-images', form, { headers: this.noAuth }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  GetLastProducts() {
    return this.http.get('api/last7', { headers: this.noAuth });
  }
}
