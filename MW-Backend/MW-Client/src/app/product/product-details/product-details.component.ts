import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }
  ngOnInit() {
    const slug: string = this.route.snapshot.params['slug'];
    this.productService.getProduct(slug).subscribe(res => {
        this.product = res as Product;
    });
  }

}
