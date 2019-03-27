import { Component, OnInit} from '@angular/core';
import { AdminProductService } from 'src/app/services/admin-product.service';
import { AdminProduct } from 'src/app/models/adminProduct';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, UrlSegment } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private aps: AdminProductService, private activeRoute: ActivatedRoute) { }

  productsToShow = "all-products";
  columns: string[] = ['Select', 'Id', 'Image', 'Name', 'Price', 'Color', 'Quantity', 'OnSale', 'Source', 'Date_Created', 'Controls', 'Expand'];
  dataSource = new MatTableDataSource<AdminProduct>();
  selection = new SelectionModel<AdminProduct>(true, []);

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.productsToShow = params.x;
      this.aps.GetProductsList(this.productsToShow)
        .subscribe((data: AdminProduct[]) => {
          this.dataSource.data = data;
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

}
