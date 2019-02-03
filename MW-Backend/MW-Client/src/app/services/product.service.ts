import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return [
      { Id: 100, title: 'Princess jewelries', image: '../assets/99.jpg', price: 110 },
      { Id: 101, title: 'Cindrella red shoes', image: '../assets/87.jpg', price: 45 },
      { Id: 102, title: 'beat Headphones', image: '../assets/14.jfif', price: 10 },
      { Id: 103, title: 'iPhone X', image: '../assets/7.jpg', price: 1000 },
      { Id: 104, title: 'Football shoes', image: '../assets/1.jpg', price: 20 },
    ];
  }

}
