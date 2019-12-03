import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(){
    this.snackbar.open('Hello Snackbar', 'Ok');
  }

}
