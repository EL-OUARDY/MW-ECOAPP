import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MiniProduct } from 'src/app/models/miniProduct';
import { AdminProductService } from '../../services/admin-product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppError } from 'src/app/shared/errors/app-error';
import { BadInput, NotFound } from 'src/app/shared/errors/http-errors';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'product-history',
  templateUrl: './product-history.component.html',
})
export class ProductHistoryComponent {

  @Input('Products') Products: MiniProduct[];
  @Output('delete') delete = new EventEmitter();

  constructor(private aps: AdminProductService,
      private router: Router,
      private dialogService: DialogService,
      private toaster: ToastrService,
      ) { }

  editProduct(id) {
    this.router.navigate(['/admin/product-form'], { queryParams: { editId: id } });
  }
  copyProduct(id) {
    this.router.navigate(['/admin/product-form'], { queryParams: { copyId: id } });
  }

  ProductVars(id) {
    this.dialogService.openVariantsDialog(id);
  }

  deleteProduct(id) {
    this.dialogService.raiseConfirmDialog().subscribe(res => {
      if (res) {
        this.aps.deleteProduct(id)
          .subscribe(
            () => this.delete.emit(id),
            (err: AppError) => {
              if (err instanceof BadInput) {
                this.toaster.warning('Something Went Wrong');
                console.log(err.originalError.error.Message);
              } else if (err instanceof NotFound) {
                this.toaster.warning('Product Not Found Or Already Deleted');
              } else { throw err; }
            });
      }
    });
  }
  
  trackById(index, product) {
    return product ? product.Id : undefined;
  }
}
