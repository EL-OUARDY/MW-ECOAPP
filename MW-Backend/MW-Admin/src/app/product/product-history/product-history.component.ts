import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output('delete') delete = new EventEmitter();

  constructor(private aps: AdminProductService, private toaster: ToastrService) { }

  ngOnInit() {
  }

  deleteProduct(product: MiniProduct) {
    this.aps.deleteProduct(product.Id).subscribe(
      () => {
          // const index = this.Products.indexOf(product);
          // this.Products.splice(index, 1);

          this.delete.emit();
      },
      (err: AppError) => {
        if (err instanceof BadInput) {
          this.toaster.warning(err.originalError.error.Message);
        } else if (err instanceof NotFound) {
          this.toaster.warning('Product Not Found Or Already Deleted');
        } else { throw err; }
      });
  }
  trackById(index, product){
    return product ? product.Id : undefined;
  }
}
