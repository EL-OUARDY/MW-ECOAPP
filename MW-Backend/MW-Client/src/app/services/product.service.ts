import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  noAuth = new HttpHeaders({ 'NoAuth': 'true' });
  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get('/api/products', {headers: this.noAuth});
  }

  getProduct(slug: string) {
    return this.http.get('/api/products/' + slug, { headers: this.noAuth });
  }

}
