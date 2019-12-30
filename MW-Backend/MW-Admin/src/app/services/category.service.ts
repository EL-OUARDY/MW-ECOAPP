import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http: HttpClient, private toaster: ToastrService) {
  }

  // ngOnDestoy
  
  getCategoriesLocally(): [] {
    return JSON.parse( localStorage.getItem("MWCategories") );
  }
  
  getCategoriesFromServer() {
    return this.http.get('api/Categories');
  }
  
  saveOnLocalStorage(cats: any) {
    localStorage.setItem("MWCategories", JSON.stringify(cats)); // Save On LS
  }
}
