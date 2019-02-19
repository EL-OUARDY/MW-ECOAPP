import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminProduct } from '../models/adminProduct';
import { catchError } from 'rxjs/operators';
import { handleExpectedErrors } from 'src/app/common/errors/http-errors';

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

  PostProduct(p: AdminProduct) {
    return this.http.post('api/Products', p , { headers: this.noAuth }).pipe(
      catchError(handleExpectedErrors)
    );
  }
}
