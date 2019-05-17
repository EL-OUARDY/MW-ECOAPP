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
  Register(f) {
    return this.http.post('api/Account/Register', f, { headers: this.noAuth }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  Login(f) {
    const data = 'username=' + f.Email + '&password=' + f.Password + '&grant_type=password';
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'NoAuth': 'true' });

    return this.http.post('login', data, { headers: reqHeader }).pipe(
      catchError(handleExpectedErrors)
    );
  }

  getProfile() {
    const Ls = localStorage.getItem('MW-AccessToken');
    if (Ls == null) {
      return;
    }
    this.http.get('/api/UserIdentity').subscribe((userProfile: any) => {
      this.user = userProfile as UserProfile;
      this.goLive();
    },
      (error: Response) => {
        if (error.status === 401) { // means that acctoken has expired
          localStorage.removeItem('MW-AccessToken');
          this.user = null;
        } else throw error;
      });
  }

  Logout() {
    this.http.post('/api/Account/Logout', null).subscribe(() => { // logout!!?
      localStorage.removeItem('MW-AccessToken');
      this.user = null;
      this.router.navigate(['/']);
      this.cnx.stop();
    });
  }

  private goLive() {
    this.cnx = this._signalR.createConnection();
    this.cnx.start().then((c) => {
      console.log('you are connected to the hub..');
      // setInterval(() => {
      //   console.log('should go offline');
      //   this.cnx.stop(); // go offline
      // }, 50000);

    }).catch(err => console.warn(err));
  }
}
