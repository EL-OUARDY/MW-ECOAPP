import { Component, OnInit} from '@angular/core';
import { AdminProductService } from 'src/app/services/admin-product.service';
import { AdminProduct } from 'src/app/models/adminProduct';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource} from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppError } from 'src/app/shared/errors/app-error';
import { BadInput, NotFound } from 'src/app/shared/errors/http-errors';
import { ProductFilter } from 'src/app/models/ProductFilter';
import { DateTime } from 'luxon';
import { DialogService } from 'src/app/services/dialog.service';
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  animations: [
    trigger("detailExpand", [
      state(
        "collapsed",
        style({ height: "0px", minHeight: "0", display: "none" })
      ),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
})
export class ProductListComponent implements OnInit {
  columns = [
    "Select",
    "Id",
    "Image",
    "Name",
    "Price",
    "Color",
    "Quantity",
    "Source",
    "OnSale",
    "Last_Update",
    "Controls",
    "Expand"
  ];
  dataSource: MatTableDataSource<AdminProduct>;
  expandedElement: AdminProduct | null;
  selection = new SelectionModel<AdminProduct>(true, []);
  nbTotal: number;
  queryObj: ProductFilter;

  _dateTime = DateTime; // luxion instance
  
  constructor(
    private productService: AdminProductService,
    private router: Router,
    private dialogService: DialogService,
    private toaster: ToastrService
    ) {
      this.queryObj = new ProductFilter();
    }
    
  ngOnInit() {
    this.populateProducts();
  }

  public get availablePages(): number {
    const nb = Math.ceil(this.nbTotal / this.queryObj.PageSize) || 1;
    return nb;
  }

  public get activePage(): number {
    return this.queryObj.CurrentPage + 1;
  }
    
  onSaleChange(onSale) {
    if (this.queryObj.OnSale !== onSale) {
      this.queryObj.Deleted = false;
      this.queryObj.OnSale = onSale;
      this.populateProducts();
    }
  }

  BringDeleted() {
    this.queryObj.OnSale = undefined;
    this.queryObj.Deleted = true;
    this.populateProducts();
  }

  private populateProducts() {
    this.productService.GetProductsList(this.queryObj).subscribe((res: any) => {
      this.nbTotal = res.Count; // display the total of products somewhere
      this.dataSource = new MatTableDataSource<AdminProduct>(res.Items);
      
      this.selection.clear();
    });
  }

  isAllSelected() {
    const nbSelected = this.selection.selected.length;
    const nbRows = this.dataSource.data.length;
    return nbSelected === nbRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackById(index, product) {
    return product ? product.Id : undefined;
  }

  orderBy(value) {
    if (this.queryObj.OrderBy === value)
      this.queryObj.IsSortAscending = !this.queryObj.IsSortAscending;
    else {
      this.queryObj.IsSortAscending = true;
      this.queryObj.OrderBy = value;
    }
    
    this.populateProducts();
  }

  itemsToShowChanged() {
    this.queryObj.CurrentPage = 0; // Might Changed later
    this.populateProducts();
  }

  paggingInputChanged(page) {
    if (page > 0) {
      this.queryObj.CurrentPage = page - 1;
    } else {
      this.queryObj.CurrentPage = 0; 
    }

    this.populateProducts();
  }

  goToPage(page) {
    this.queryObj.CurrentPage = page;
    this.populateProducts();
  }

  nextPage() {
    if ((this.queryObj.CurrentPage + 1) < this.availablePages) {
    this.queryObj.CurrentPage++;
    this.populateProducts();
    }
  }

  prevPage() {
    if (this.queryObj.CurrentPage > 0) {
      this.queryObj.CurrentPage--;
      this.populateProducts();
    }
  }

  editProduct(id) {
    this.router.navigate(["/admin/product-form"], {
      queryParams: { editId: id }
    });
  }
  copyProduct(id) {
    this.router.navigate(["/admin/product-form"], {
      queryParams: { copyId: id }
    });
  }
  deleteProduct(id, permanently = false) {
    const message = permanently ? 'Delete this product permanently ?!' : null;
    this.dialogService.raiseConfirmDialog(message).subscribe(res => {
      if (res) {
        this.productService.deleteProduct(id, permanently).subscribe(
          () => this.populateProducts(),
          (err: AppError) => {
            if (err instanceof BadInput) {
              this.toaster.warning("Something Went Wrong");
            } else if (err instanceof NotFound) {
              this.toaster.warning("Product Not Found Or Already Deleted");
            } else {
              throw err;
            }
          }
        );
      }
    });
  }

  deleteRange(products: AdminProduct[]) {
    this.dialogService.raiseConfirmDialog().subscribe(res => {
      if (res) {
        const ids = [];
        products.forEach(x => ids.push(x.Id));
        this.productService.deleteRange(ids).subscribe(
          () => {
            this.toaster.success("Deleted Successfuly");
            this.populateProducts();
          },
          err => this.toaster.error(err)
        );
      }
    });
  }

  ProductVars(id) {
    this.dialogService.openVariantsDialog(id);
  }

  restoreProducts(ids) {
    this.productService.restoreProducts(ids).subscribe(
      () => {
        this.toaster.success("Product Restored");
        this.populateProducts();
      },
      (err: AppError) => {
        if (err instanceof NotFound) {
          this.toaster.warning("Product Not Found Or Deleted Permanently !");
        } else {
          throw err;
        }
      }
    );
  }

  restoreRange(products: AdminProduct[]) {
    const ids = [];
    products.forEach(x => ids.push(x.Id));
    this.restoreProducts(ids);
  }

}
