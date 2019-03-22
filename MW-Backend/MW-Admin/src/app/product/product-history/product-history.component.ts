import { Component, OnInit, Input } from '@angular/core';
import { MiniProduct } from 'src/app/models/miniProduct';
import { AdminProductService } from '../../services/admin-product.service';
import { AppError } from 'src/app/common/errors/app-error';
import { BadInput, NotFound } from 'src/app/common/errors/http-errors';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'product-history',
  templateUrl: './product-history.component.html',
  styleUrls: ['./product-history.component.css']
})
export class ProductHistoryComponent implements OnInit {

  @Input('Products') Products: MiniProduct[];

  constructor(private aps: AdminProductService, private toaster: ToastrService) { }

  ngOnInit() {
  }

  deleteProduct(product: MiniProduct) {
    console.log(product.Id);
    this.aps.deleteProduct(product.Id).subscribe(
      () => {
          const index = this.Products.indexOf(product);
          this.Products.splice(index, 1);
      },
      (err: AppError) => {
        if (err instanceof BadInput) {
          this.toaster.warning(err.originalError.error.Message);
        } else if (err instanceof NotFound) {
          this.toaster.warning('Product Not Found Or Already Deleted');
        } else { throw err; }
      });
  }
}
