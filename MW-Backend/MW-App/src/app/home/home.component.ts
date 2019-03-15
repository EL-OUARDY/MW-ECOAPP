import { Component, OnInit } from '@angular/core';
import { MiniProduct } from '../models/miniProduct';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$;
  constructor(private productService: ProductService, private toaster: ToastrService) { }

  ngOnInit() {
    this.products$ = this.productService.getProductList();
  }

  n() {
    this.toaster.success('You did it', 'Success');
  }

}
