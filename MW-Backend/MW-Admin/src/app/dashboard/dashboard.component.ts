import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  svgValue: string;

  constructor(private http: HttpClient) { 
  }

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
