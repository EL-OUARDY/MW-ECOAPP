import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QueryObject } from '../../QueryObject';
import { MatDialog } from '@angular/material';
import { InfosDialogComponent } from '../../dialogs/infos/infos-dialog.component';

@Component({
  selector: 'table-filter',
  templateUrl: './table-filter.component.html'
})
export class TableFilterComponent {
  categories: any;
  subCategories: any;

  @Input('queryObj') queryObj: QueryObject;
  @Output('filter') filter = new EventEmitter();
    
  constructor(private categoryService: CategoryService, private dialog: MatDialog) {
    this.categories = this.categoryService._categories;
  }

  doFilter() {
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
