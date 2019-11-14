import { Injectable, OnInit, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from 'src/app/models/userProfile';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';

import { handleExpectedErrors } from 'src/app/common/errors/http-errors';
import { SignalR, SignalRConnection } from 'ng2-signalr';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService implements OnInit {

  user: UserProfile;
  cnx: SignalRConnection;
  // for demostration
  noAuth = new HttpHeaders({ 'NoAuth': 'true' });

  constructor(private zone: NgZone, private http: HttpClient, private _signalR: SignalR, private router: Router) {
  }

  ngOnInit() {
  }

  Register(form) {
    return this.http.post('api/Account/Register', form, { headers: this.noAuth }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  Login(form) {
    const data = 'username=' + form.Email + '&password=' + form.Password + '&grant_type=password';
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'NoAuth': 'true' });

    return this.http.post('login', data, { headers: reqHeader }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  Logout() {
    this.http.post('/api/Account/Logout', null).subscribe(() => { // logout!!?
      localStorage.removeItem('MWToken');
      this.user = null;
      // this.cnx.stop(); // Stop signalR connection
      this.router.navigate(['/']);
    });
  }

  goLive() {
    const Ls = localStorage.getItem('MWToken');
    if (Ls == null) {
      return;
    }

    this.cnx = this._signalR.createConnection();
    this.cnx.start().then((c) => {
      console.log('you are connected to the hub..');
      // setInterval(() => {
      //   console.log('should go offline');
      //   this.cnx.stop(); // go offline
      // }, 60000);

    }).catch(err => console.warn(err));
  }
}
