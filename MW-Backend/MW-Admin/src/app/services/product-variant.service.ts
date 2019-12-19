import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductVariantService {
  private readonly END_POINT = 'api/ProductVariants/';

  constructor(private http: HttpClient) { }

  GetProductVariants(id) {
    return this.http.get( this.END_POINT + id);
  }
}
