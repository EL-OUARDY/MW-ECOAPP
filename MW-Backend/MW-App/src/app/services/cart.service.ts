import { Injectable } from '@angular/core';
import { ShoppingCart } from '../models/shoppingCart';
import { MiniProduct } from '../models/miniProduct';
import { CartItem } from '../models/cartItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  Cart = new ShoppingCart();
  constructor() { }

  addToCart(p: MiniProduct) {
    const item = this.Cart.items.find(x => x.product.Id === p.Id);
    if (item) {
      item.quantity++;
      this.saveCart();
      return;
    }
    const newItem = new CartItem(p, 1);
    this.Cart.items.push(newItem);
    this.saveCart();
  }

  removeCompleteItem(id) {
    const item = this.Cart.items.find(x => x.product.Id === id);
    if (item) {
      this.Cart.items.splice(this.Cart.items.indexOf(item), 1);
      this.saveCart();
    }

  }

  removeFromCart(p) {
    const item = this.Cart.items.find(x => x.product.Id === p.Id);
    if (item && item.quantity > 1) {
      item.quantity--;
      this.saveCart();
      return;
    } else if (item && item.quantity === 1) {
      this.Cart.items.splice(this.Cart.items.indexOf(item), 1);
      this.saveCart();
    }
  }

  clearCart() {
    this.Cart.items = [];
    this.saveCart();
  }

  private saveCart() { // save the content of cart in the local storage
    localStorage.setItem('MW-shoppingCart', JSON.stringify(this.Cart.items));
  }

  loadCart() { // retreive the content of cart from the local storage
    const c = localStorage.getItem('MW-shoppingCart');
    if (c != null) {
      this.Cart.items = JSON.parse(c) as CartItem[];
    }
  }

  postCart() { // post the content of cart to the server
    console.log(JSON.stringify(this.Cart.items));
  }
}
