import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'category-controle',
  templateUrl: './category-controle.component.html'
})
export class CategoryControleComponent implements OnInit {
    
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

}
