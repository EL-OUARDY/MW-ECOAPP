import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countries = ['USA', 'CANADA', 'MOROCCO'];
  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(){
    this.snackbar.open('Hello Snackbar', 'Ok', {
    });
  }

}
