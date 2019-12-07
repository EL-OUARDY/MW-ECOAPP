import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  res;
  date = new Date();
  constructor(private snackbar: MatSnackBar) { 
    this.res = DateTime.fromJSDate(this.date).toFormat('MM-dd-yyyy');
  }

  ngOnInit() {
  }

  openSnackBar(){
    this.snackbar.open('Hello Snackbar', 'Ok');
  }

}
