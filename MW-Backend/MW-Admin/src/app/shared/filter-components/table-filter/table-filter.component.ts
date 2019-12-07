import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductFilter } from '../../ProductFilter';
import { MatDialog } from '@angular/material';
import { InfosDialogComponent } from '../../dialogs/infos/infos-dialog.component';

@Component({
  selector: 'table-filter',
  templateUrl: './table-filter.component.html'
})
export class TableFilterComponent {
  categories: any;
  subCategories: any;

  @Input('queryObj') queryObj: ProductFilter;
  @Output('filter') filter = new EventEmitter();
  searchQuery: string;
    
  constructor(private categoryService: CategoryService, private dialog: MatDialog) {
    this.categories = this.categoryService._categories;
  }

  doFilter() {
    if (this.searchQuery)
      this.queryObj.Search = this.searchQuery.toLowerCase();
    else
      this.queryObj.Search = undefined;
      
    this.filter.emit();
  }

  advancedSearch(){
    this.dialog.open(InfosDialogComponent, {panelClass: 'info-dialog'});
  }

  Reset() {
    this.queryObj.CategoryId = undefined;
    this.queryObj.SubCategoryId = undefined;
    this.queryObj.Search = undefined;
    this.queryObj.DateMin = undefined;
    this.queryObj.DateMax = undefined;

    this.searchQuery = undefined;

    this.doFilter();
  }
  
  getSub(cat) {
    try {
      if (cat) {
        this.subCategories = this.categories.find(
          x => x.Id === +cat
        ).SubCategories;
      }
    } catch (e) {}
  }
}
