import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

import * as $ from 'jquery';
import { SignalR, SignalRConnection } from 'ng2-signalr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$;
  constructor(private productService: ProductService, private _signalR: SignalR) { }

  ngOnInit() {
    // this.products$ = this.productService.getProductList();

    this._signalR.connect().then((c) => {

      const listener = c.listenFor('getMyId');

      listener.subscribe((id: string) => {
        $('#myId').text(id);
      });

      const listener2 = c.listenFor('onRecordHit');

      listener2.subscribe((count: string) => {
        $('#counter').text(count);
      });
      c.invoke('getMyId');
      c.invoke('onRecordHit');
    }).catch(err => console.warn(err));
  }
}
