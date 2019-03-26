import { Component, OnInit} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminProductService } from 'src/app/services/admin-product.service';
import { AdminProduct } from 'src/app/models/adminProduct';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private aps: AdminProductService) { }

  columns: string[] = ['Selection', 'Id', 'Image', 'Name', 'Price', 'Color', 'Quantity', 'OnSale', 'Source', 'Date_Created', 'Controls', 'Expand'];
  products$;
  dataSource: Observable<any[]>;

  ngOnInit() {
    this.aps.GetProductsList().subscribe((data: AdminProduct[]) => {
      this.products$ = new BehaviorSubject(data);
      this.dataSource = this.products$.pipe(map(v => Object.values(v)));
    });
  }
}
