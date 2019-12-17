import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductFilter } from '../../../models/ProductFilter';
import { MatDialog } from '@angular/material';
import { InfosDialogComponent } from '../../dialogs/infos/infos-dialog.component';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DateTime } from 'luxon';

@Component({
  selector: 'table-filter',
  templateUrl: './table-filter.component.html'
})
export class TableFilterComponent {
  @Output('filter') filter = new EventEmitter();
  @Input('queryObj') queryObj: ProductFilter;
  @Input('noCategory') noCategory: boolean;
  @Input('target') target: string;
  @ViewChild("f") form: NgForm;
  
  categories: any;
  subCategories: any;
  searchQuery: string;
  
  maxDate: Date;
  minDate: Date;

  todayDate = new Date();

  constructor(private categoryService: CategoryService, private dialog: MatDialog, private toaster: ToastrService) {
    this.categories = this.categoryService._categories;
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
      this.queryObj.MinDate = DateTime.fromJSDate(this.minDate).toFormat('yyyy-MM-dd');
      this.queryObj.MaxDate = DateTime.fromJSDate(this.maxDate).toFormat('yyyy-MM-dd');
    }
    
    this.filter.emit();
  }

  advancedSearch(){
    this.dialog.open(InfosDialogComponent, {panelClass: 'info-dialog'});
  }

  minDateInputChange() {
    if (!this.maxDate)
      this.maxDate = new Date();

    if ( DateTime.fromJSDate(this.minDate).valueOf() > DateTime.fromJSDate(this.maxDate).valueOf())
      this.minDate = new Date();
  }

  Reset() {
    this.queryObj.resetFields();
    this.form.resetForm();
    this.doFilter();
  }
  
  getSub(cat) {
    try {
      if (cat) {
        this.subCategories = this.categories.find(
          x => x.Id === +cat
        ).SubCategories;
        this.queryObj.SubCategoryId = 0; // zero means all subCategories
      }
    } catch (e) {}
  }
}
