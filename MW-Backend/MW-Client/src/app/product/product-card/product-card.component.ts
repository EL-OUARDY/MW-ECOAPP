import { Component, OnInit, Input } from '@angular/core';
import { MiniProduct } from 'src/app/models/miniProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: MiniProduct;

  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
  getQuantity() {
    const item = this.cartService.Cart.items.find(x => x.product.Id === this.product.Id);
    return item ? item.quantity : 0;
  }
}
