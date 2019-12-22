import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  fd = new FormData();


  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  }

  f() {
    this.fd.append("Variant", "Color");
    this.http.post("api/demo", this.fd).subscribe((response) => console.log(response));
  }

  imageChanged(files) {
    this.fd.append("Image", files[0], files[0].name);
  }
}
