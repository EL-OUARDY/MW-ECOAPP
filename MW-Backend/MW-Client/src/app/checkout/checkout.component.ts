import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ShippingAdress } from '../models/shippingAdress';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  shoppingCart;
  constructor(private cartService: CartService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.shoppingCart = this.cartService.Cart;
  }

  Proceed(f: NgForm) {
    this.userService.adress = <ShippingAdress>f.value;
    this.router.navigate(['/payment']);
  }
}
