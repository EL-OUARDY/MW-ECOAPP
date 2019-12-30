import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {
  svgValue: string;

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.setSVG();
  }
  
  setSVG() {
    if (this.svgValue.startsWith('<svg ') && this.svgValue.endsWith('</svg>'))
      document.getElementById('svg').innerHTML = this.svgValue;
    else
      document.getElementById('svg').innerHTML = "NOT VALID";
  }

}
