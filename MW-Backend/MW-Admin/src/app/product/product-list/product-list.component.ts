import { Component, OnInit} from '@angular/core';
import { AdminProductService } from 'src/app/services/admin-product.service';
import { AdminProduct } from 'src/app/models/adminProduct';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource} from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { AppError } from 'src/app/common/errors/app-error';
import { BadInput, NotFound } from 'src/app/common/errors/http-errors';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductListComponent implements OnInit {
  
  queryObj: any = {};
  columns = ['Select', 'Id', 'Image', 'Name', 'Price', 'Color', 'Quantity', 'Source', 'OnSale', 'Date_Created', 'Controls', 'Expand'];
  dataSource: MatTableDataSource<AdminProduct>;
  expandedElement: AdminProduct | null;
  selection = new SelectionModel<AdminProduct>(true, []);
  nbTotal: Number;
  show = 10;
  page = 1;
  
  constructor(private productService: AdminProductService,
              private router: Router,
              private toaster: ToastrService) { }

  ngOnInit() {
    this.populateProducts();
  }

  onSaleChange(onSale) {
    this.queryObj.OnSale = onSale;
    this.populateProducts();
  }

  deleteRange(products: AdminProduct[]) {
    const ids = [];
    products.forEach( x => ids.push(x.Id) );
    this.productService.deleteRange(ids).subscribe(() => {
      this.toaster.success("Deleted Successfuly");
      this.populateProducts();
    },
    err => this.toaster.error(err)
    );
  }

  private populateProducts() {
    this.productService.GetProductsList(this.queryObj)
      .subscribe((res: any) => {
        this.nbTotal = res.Count;
        this.dataSource = new MatTableDataSource<AdminProduct>(res.Items);
        this.selection.clear();
      });
  }

  isAllSelected() {
    const nbSelected = this.selection.selected.length;
    const nbRows = this.dataSource.data.length;
    return nbSelected === nbRows;
  }

  masterToggle(){
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackById(index, product) {
    return product ? product.Id : undefined;
  }


  // Controls
  editProduct(id) {
    this.router.navigate(['/admin/product-form'], { queryParams: { editId: id } });
  }
  copyProduct(id) {
    this.router.navigate(['/admin/product-form'], { queryParams: { copyId: id } });
  }
  deleteProduct(id) {
    this.productService.raiseConfirmDialog().subscribe(res => {
      if (res) {
        this.productService.deleteProduct(id)
          .subscribe(
            () => console.log("DELETED"),
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
}
