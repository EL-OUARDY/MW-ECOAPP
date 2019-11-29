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

  private getCategories(locally = true) {
    // use it with locally=false to bring new categories from server
    this._categories = this.getCategoriesLocally();

    if (!this._categories || !locally) {
      this.getCategoriesFromServer();
    }
  }
  private getCategoriesLocally() {
    const categories = localStorage.getItem("MWCategories");
    return JSON.parse(categories);
  }

  private getCategoriesFromServer() {
    return this.http.get('api/Categories').subscribe(cats => {
      localStorage.setItem("MWCategories", JSON.stringify(cats));
      this._categories = cats;
    },
    () => this.toaster.error("Could Not Get New Categories .."));
  }
}
