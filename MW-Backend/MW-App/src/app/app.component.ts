import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { UserAuthService } from './services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private cartService: CartService, private userAuth: UserAuthService) {
  }

  ngOnInit() {
    this.userAuth.goLive();
    this.cartService.loadCart();
  }
}
