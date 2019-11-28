import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { handleExpectedErrors } from '../shared/errors/http-errors';
import { ADMIN_ROLE } from '../shared/GlobalConstants';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  _TOKEN: string;
  admin: any;
  noAuth = new HttpHeaders({ 'NoAuth': 'true' });

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router ) { }

  Login(form) {
    return this.http.post('api/Account/Login', form, { headers: this.noAuth } ).pipe(
      catchError(handleExpectedErrors)
    );
  }

  authenticate() {
    const Ls = localStorage.getItem('MWToken');
    if (Ls == null) return;

    this.http.get('/api/authenticate').subscribe((response: any) => {
      if (response.role === ADMIN_ROLE)
        this.admin = JSON.parse(response.profile);
      else this.authenticationFailed();
    },
    (error: Response) => {
      if (error.status === 401) // means that acctoken has expired
        this.authenticationFailed();
      else throw error;
    });
  }
  
  private authenticationFailed() {
    localStorage.removeItem('MWToken');
    this.admin = null;
  }

  afterAuthentication(response: any, stayLogged) { // change method name later
    if (stayLogged) 
      localStorage.setItem('MWToken', response.access_token);
    else this._TOKEN = response.access_token;
    
    this.admin = JSON.parse(response.profile);
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/admin';
    this.router.navigateByUrl(returnUrl); // Redirect to a return url
  }

}
