import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private snackbar: MatSnackBar) { }

  columns: string[] = ['Id', 'title', 'price', 'image'];
  products = [
    { Id: 100, title: 'Princess jewelries', image: '../assets/99.jpg', price: 110 },
    { Id: 101, title: 'Cindrella red shoes', image: '../assets/87.jpg', price: 45 },
    { Id: 102, title: 'Original Headphones', image: '../assets/14.jfif', price: 10 },
    { Id: 106, title: 'beat Headphones', image: '../assets/14.jfif', price: 10 },
    { Id: 103, title: 'iPhone X', image: '../assets/7.jpg', price: 1000 },
    { Id: 105, title: 'Football shoes', image: '../assets/1.jpg', price: 20 },
    { Id: 104, title: 'White shoes', image: '../assets/1.jpg', price: 40 },
  ];
  products$ = new BehaviorSubject(this.products);
  dataSource: Observable<any[]>;

  searchQuery: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = this.products$.pipe(map( v => Object.values(v) ));

    // this.dataSource = new MatTableDataSource(this.products);
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;

    // this.data.filterPredicate = (data, filter) => { 
    //   return this.columns.some(el => {
    //     return el !== 'image' && data[el].toLowerCase().indexOf(filter) !== -1;
    //   });
    // };
  }

  filterData() {
    // this.dataSource.filter = this.searchQuery.toLowerCase();
  }

  onPage(event) {
    console.log(event);
  }

  openSnackBar(){
    this.snackbar.open('Hello Snackbar', 'Ok');
  }

}
