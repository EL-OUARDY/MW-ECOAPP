import { Injectable, OnInit } from '@angular/core';
import { ShippingAdress } from '../models/shippingAdress';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  adress: ShippingAdress;

  constructor() { }

  ngOnInit() {
  }

}
