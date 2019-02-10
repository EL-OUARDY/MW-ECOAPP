import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const header = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('MW-AccessToken')});
    return this.http.get('/api/products/' + slug , {headers: header});
  }

}
