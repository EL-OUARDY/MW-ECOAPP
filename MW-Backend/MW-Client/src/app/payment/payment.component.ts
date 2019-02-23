import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private userService: UserService, private cartService: CartService) { }

  ngOnInit() {
  }

  PayPal() {
    this.cartService.postCart();
  }
}
