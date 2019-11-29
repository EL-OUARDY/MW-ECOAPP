import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QueryObject } from '../../QueryObject';

@Component({
  selector: 'table-filter',
  templateUrl: './table-filter.component.html'
})
export class TableFilterComponent {
  categories: any;
  subCategories: any;

  @Input('queryObj') queryObj: QueryObject;
  @Output('filter') filter = new EventEmitter();
    
  constructor(private categoryService: CategoryService) {
    this.categories = this.categoryService._categories;
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

  Reset() {
    this.queryObj.CategoryId = undefined;
    this.queryObj.SubCategoryId = undefined;
    this.queryObj.Search = undefined;
    this.queryObj.DateMin = undefined;
    this.queryObj.DateMax = undefined;
  }

}
