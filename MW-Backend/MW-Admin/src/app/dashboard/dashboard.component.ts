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
    this.res = DateTime.fromISO("2019-12-07T19:06:41+01:00").toRelative();
  }

  ngOnInit() {
  }

  openSnackBar(){
    this.snackbar.open('Hello Snackbar', 'Ok');
  }

}
