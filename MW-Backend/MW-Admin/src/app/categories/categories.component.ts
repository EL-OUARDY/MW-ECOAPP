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
    this.checkSVG();
  }

  checkSVG() {
    if (!this.svgValue.startsWith('<svg ') || !this.svgValue.endsWith('</svg>')) // SVG Not Valid
      // add error to the form
      console.log("NOT VALID");
      
  }
  
  setSVG() {
    if (this.svgValue.startsWith('<svg ') && this.svgValue.endsWith('</svg>'))
      document.getElementById('svg').innerHTML = this.svgValue;
    else
      document.getElementById('svg').innerHTML = "NOT VALID";
  }

}
