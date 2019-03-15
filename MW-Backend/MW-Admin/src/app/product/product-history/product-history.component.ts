import { Component, OnInit, Input } from '@angular/core';
import { MiniProduct } from 'src/app/models/miniProduct';
import { AdminProductService } from '../../services/admin-product.service';

@Component({
  selector: 'product-history',
  templateUrl: './product-history.component.html',
  styleUrls: ['./product-history.component.css']
})
export class ProductHistoryComponent implements OnInit {

  @Input('Products') Products: MiniProduct[];

  constructor(private aps: AdminProductService) { }

  ngOnInit() {
  }

}
