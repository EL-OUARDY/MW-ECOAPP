import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductFilter } from '../../ProductFilter';
import { MatDialog } from '@angular/material';
import { InfosDialogComponent } from '../../dialogs/infos/infos-dialog.component';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'table-filter',
  templateUrl: './table-filter.component.html'
})
export class TableFilterComponent {
  @Output('filter') filter = new EventEmitter();
  @Input('queryObj') queryObj: ProductFilter;
  @ViewChild("f") form: NgForm;
  
  categories: any;
  subCategories: any;
  searchQuery: string;
  
  maxDate: Date;
  minDate: Date;

  todayDate = new Date();

  fakeDate = new Date('2019-5-05');
  
  constructor(private categoryService: CategoryService, private dialog: MatDialog, private toaster: ToastrService) {
    this.categories = this.categoryService._categories;
    // this.queryObj.MaxDate = Date.now();
    console.log(this.fakeDate);
    
  }

  doFilter() {
    if (this.form.invalid) {
      this.toaster.warning('Filter is not valid !');
      return;
    }

    if (this.searchQuery)
      this.queryObj.Search = this.searchQuery.toLowerCase();
    else
      this.queryObj.Search = undefined;

    if (this.minDate && this.maxDate) { // string
      this.queryObj.MinDate = this.minDate.toDateString();
      this.queryObj.MaxDate = this.maxDate.toUTCString();
    }
    
    this.filter.emit();
  }

  private shortDateFormat(longDateTime: Date) {
    return longDateTime.toISOString().slice(0, 10); // split only the short date format
  }

  advancedSearch(){
    this.dialog.open(InfosDialogComponent, {panelClass: 'info-dialog'});
  }

  minDateInputChange() {
    if (!this.maxDate) this.maxDate = new Date();
  }

  Reset() {
    // this.queryObj.CategoryId = undefined;
    // this.queryObj.SubCategoryId = undefined;
    // this.queryObj.Search = undefined;
    // this.queryObj.MinDate = undefined;
    // this.queryObj.MaxDate = undefined;

    // this.searchQuery = undefined;
    // this.minDate = this.maxDate = undefined;
    this.form.resetForm();
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
