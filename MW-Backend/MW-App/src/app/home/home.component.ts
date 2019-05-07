import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

import * as $ from 'jquery';
import { SignalR, SignalRConnection } from 'ng2-signalr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$;
  constructor(private productService: ProductService, private _signalR: SignalR, private toaster: ToastrService) { }

  ngOnInit() {
    // this.products$ = this.productService.getProductList();

    this._signalR.connect().then((c) => {

      const listener = c.listenFor('getMyId');

      listener.subscribe((id: string) => {
        $('#myId').text(id);
      });

      const listener2 = c.listenFor('onRecordHit');

      listener2.subscribe((count: string) => {
        this.toaster.success('someone has logged in/out recently');
        $('#counter').text(count);
      });
      c.invoke('getMyId');

    }).catch(err => console.warn(err));
  }
}
