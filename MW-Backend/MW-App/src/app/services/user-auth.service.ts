import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { UserProfile } from 'src/app/models/userProfile';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';

import {handleExpectedErrors } from 'src/app/common/errors/http-errors';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  user: UserProfile;
  // for demostration
  noAuth = new HttpHeaders({ 'NoAuth': 'true' });

  constructor(private http: HttpClient, private toaster: ToastrService, private router: Router) { }

  Register(f) {
    return this.http.post('api/Account/Register', f, {headers : this.noAuth}).pipe(
      catchError(handleExpectedErrors)
    );
  }

  Login(f) {
    const data = 'username=' + f.Email + '&password=' + f.Password + '&grant_type=password';
    const reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-urlencoded', 'NoAuth': 'true'});

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
    },
    (error: Response) => {
      if (error.status === 401) { // means that acctoken has expired
        localStorage.removeItem('MW-AccessToken');
        this.user = null;
      } else throw error;
    });
  }

  Logout() {
    this.http.post('/api/Account/Logout', null).subscribe( x => {
      console.log(x);
      localStorage.removeItem('MW-AccessToken');
      this.user = null;
      this.router.navigate(['/']);
    });
  }
}
