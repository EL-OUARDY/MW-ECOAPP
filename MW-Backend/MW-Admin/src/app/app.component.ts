import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from './services/admin-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private adminAuth: AdminAuthService) {
  }
  
  ngOnInit() {
    this.adminAuth.authenticate();
  }
}


