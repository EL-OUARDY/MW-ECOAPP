import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  user;
  constructor(private http: HttpClient, private toaster: ToastrService) { }

  Register(f) {
    return this.http.post('api/Account/Register', f);
  }

  Login(f) {
    const data = 'username=' + f.Email + '&password=' + f.Password + '&grant_type=password';
    const reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-urlencoded'});

    this.http.post('token', data, { headers: reqHeader }).subscribe((res: any) => {
      this.toaster.success('Logged-in', 'Success');
      localStorage.setItem('MW-AccessToken', res.access_token);
      console.log(res);   
      this.getProfile();
    });
  }
  
  getProfile() {
    const header = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('MW-AccessToken') });
    this.http.get('/api/user' , { headers: header }).subscribe((userProfile: any) => {
      this.user = userProfile;
    });
  }
}
