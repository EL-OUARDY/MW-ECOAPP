import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  _categories: any;

  constructor(private http: HttpClient, private toaster: ToastrService) {
    this.getCategories();
  }

  // ngOnDestoy

  private getCategories() {
    this._categories = this.getCategoriesLocally();

    if (!this._categories)
      this.getCategoriesFromServer();
  }
  private getCategoriesLocally() {
    const categories = localStorage.getItem("MWCategories");
    return JSON.parse(categories);
  }

  getCategoriesFromServer() {
    return this.http.get('api/Categories').subscribe(cats => {
      localStorage.setItem("MWCategories", JSON.stringify(cats));
      this._categories = cats;
    },
    () => this.toaster.error("Could Not Get New Categories .."));
  }
}
