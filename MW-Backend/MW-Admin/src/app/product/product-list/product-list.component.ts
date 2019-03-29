import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AdminProductService } from 'src/app/services/admin-product.service';
import { AdminProduct } from 'src/app/models/adminProduct';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private aps: AdminProductService, private activeRoute: ActivatedRoute) { }

  productsToShow;
  columns: string[] = ['Select', 'Id', 'Image', 'Name', 'Price', 'Color', 'Quantity', 'Source', 'Date_Created', 'OnSale', 'Controls', 'Expand'];
  dataSource = new MatTableDataSource<AdminProduct>();
  selection = new SelectionModel<AdminProduct>(true, []);

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe(params => {
      this.productsToShow = params.get('filter') || 'all-products';
      this.aps.GetProductsList(this.productsToShow)
        .subscribe((data: AdminProduct[]) => {
          this.dataSource.data = data;
          this.selection.clear();
        });
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(){
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackById(index, product) {
    return product ? product.Id : undefined;
  }

}
