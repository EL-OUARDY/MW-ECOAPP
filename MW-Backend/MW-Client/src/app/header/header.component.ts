import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get cartCount() {
    return this.cartService.Cart.totalCartItems;
  }

  constructor(private cartService: CartService, private userAuth: UserAuthService) {
  }

  ngOnInit() {
  }

  Logout() {
    this.userAuth.Logout();
  }

}
