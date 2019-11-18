import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategoriesLocally() {
    const categories = localStorage.getItem("MWCategories");
    return JSON.parse(categories);
  }

  getCategoriesFromServer() {
    return this.http.get('api/Categories');
  }
}
