import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MiniProduct } from '../models/miniProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get('/api/products');
  }

  getProduct(slug: string) {
    return this.http.get('/api/products/' + slug);
  }

}
