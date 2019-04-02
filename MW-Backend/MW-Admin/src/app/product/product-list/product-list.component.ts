import { Component, OnInit} from '@angular/core';
import { AdminProductService } from 'src/app/services/admin-product.service';
import { AdminProduct } from 'src/app/models/adminProduct';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
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
  constructor(private aps: AdminProductService, private activeRoute: ActivatedRoute) { }

  productsToShow;
  columns: string[] = ['Select', 'Id', 'Image', 'Name', 'Price', 'Color', 'Quantity', 'Source', 'Date_Created', 'OnSale', 'Controls', 'Expand'];
  dataSource: MatTableDataSource<AdminProduct>;
  expandedElement: AdminProduct | null;
  selection = new SelectionModel<AdminProduct>(true, []);

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe(params => {
      this.productsToShow = params.get('stock') || 'all';
      this.aps.GetProductsList(this.productsToShow)
        .subscribe((data: AdminProduct[]) => {
          this.dataSource = new MatTableDataSource<AdminProduct>(data);
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
