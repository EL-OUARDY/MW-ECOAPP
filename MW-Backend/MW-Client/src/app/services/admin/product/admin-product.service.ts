import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {
  // private readonly rootUrl = 'http://localhost:1394/api';

  constructor(private http: HttpClient) { }


  getCategories() {
    return [{ id: 1, name: 'Sport', subCategories: [{ id: 1, name: 'Bicycle' }, { id: 2, name: 'Shoes' }] },
    { id: 2, name: 'Women', subCategories: [{ id: 1, name: 'Jewelery' }, { id: 2, name: 'Bracelet' }] },
    { id: 3, name: 'Phones', subCategories: [{ id: 1, name: 'Android' }, { id: 2, name: 'iOS' }] },
    ];
  }

  getShippings() {
    return ['GearBest', 'Ali Express', 'Other']; // available shipping methods
  }

  // calling the server


  PostProduct(p) {
    this.http.post('/api/Products', p).subscribe(res => {
      console.log(res);
    });
  }
}
