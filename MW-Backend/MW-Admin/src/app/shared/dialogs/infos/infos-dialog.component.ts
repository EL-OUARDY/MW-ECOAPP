import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos-dialog.component.html'
})
export class InfosDialogComponent {

  
  resource = [
    {name: '#574995214', meaning: 'Will look for a product with this Id'},
    {name: '$price = value', meaning: 'Price equal a given value'},
    {name: '$price > 10 and price < 15', meaning: 'Price between 10 and 15 (Range)'},
    {name: "$color = 'pink' or color = 'green'", meaning: 'Color either pink or green'},
    {name: '$last_update=2019-6-27', meaning: 'Last_Update equal an exact date (respect the format!)'},
    {name: '$year(Last_Update) >= 2019', meaning: "Last_Update's year greater than or equal 2019"},
    {name: '$price in [5, 12, 99.9]', meaning: 'Price should have one of these values'},
    {name: "$contains(color, 'blue')", meaning: "Color contains 'blue' expression (ex: Royalblue, Skyblue)"},
    {name: "$source != null", meaning: "Source NOT equal to null (means it should have a value)"},
    {name: "$startswith(name,'B')", meaning: "Product's Name starts with letter 'b'"},
    {name: "$not endswith(name,'let')", meaning: "Product's Name NOT ends with 'let'"},
    {name: "$matchesPattern(Name,'%5EA.*e$')", meaning: "Product's Name must fit the RegEx provided"},
    {name: "$length(name) < 20", meaning: " Length of Product Name is less than 20 characters"},
    {name: '$Price add 5 = 10', meaning: 'Using Math Operators (ex: add, sub, div, mul, divby, mod)'},
    {name: '$floor(price) = 5', meaning: 'Floor of price equal 5 (ex: floor(5.8) = 5)'},
    {name: '$ceiling(price) = 5', meaning: 'Ceil of price equal 5 (ex: ceil(5.1) = 6)'},
    {name: '$round(price) > 9', meaning: 'Round of price greater than 9 (ex: round(5.2) = 5 | round(5.7) = 6)'},
  ];
  array = [];
  
  _pageSize = 5;
  _page = 0;

  
  public get skip(): number {
    return this._page * this._pageSize;
  }
  
  public get availablePages(): number {
    return Math.ceil(this.resource.length / this._pageSize) || 1;
  }

  constructor() {
    this.fillArray();
  }

  fillArray() {
    this.array = this.resource.slice(this.skip, (this.skip + this._pageSize));
  }

  next() {
    if ((this._page + 1) < this.availablePages) {
      this._page++;
      this.fillArray();
    }
  }
  
  prev() {
    if (this._page > 0) {
      this._page--;
      this.fillArray();
    }
  }
}
