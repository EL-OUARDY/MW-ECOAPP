import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'src/app/models/shoppingCart';

@Component({
  selector: 'sc-summary',
  templateUrl: './sc-summary.component.html',
  styleUrls: ['./sc-summary.component.css']
})
export class ScSummaryComponent implements OnInit {
  @Input('cart') cart: ShoppingCart;
  constructor() { }

  ngOnInit() {
  }

}
