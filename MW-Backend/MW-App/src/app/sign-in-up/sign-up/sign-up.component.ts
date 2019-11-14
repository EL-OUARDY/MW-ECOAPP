import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppError } from 'src/app/common/errors/app-error';
import { BadInput } from 'src/app/common/errors/http-errors';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  serverError: string;
  constructor(private userAuth: UserAuthService, private router: Router) { }

  ngOnInit() {
  }

  Register(form: NgForm) {
    if (form.invalid) {
      this.serverError = 'Fill all fields with valid data';
      return;
    }
    this.userAuth.Register(form.value).subscribe(
      () => {
        this.userAuth.Login(form.value).subscribe(
          (res: any) => {
            localStorage.setItem('MWToken', res.access_token);
            this.userAuth.goLive(); // Live
            this.router.navigate(['/']); // Redirect to a return url
          });
      },
      (err: AppError) => {
        if (err instanceof BadInput) {
          this.serverError = err.originalError.error.Message; // Display the error within Form errors
        } else throw err;
      });
  }
}