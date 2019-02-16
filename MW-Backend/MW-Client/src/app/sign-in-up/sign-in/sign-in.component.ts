import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ProductValidators } from 'src/app/common/validators/product.validators';
import { ToastrService } from 'ngx-toastr';
import { AppError } from 'src/app/common/errors/app-error';
import { BadInput } from 'src/app/common/errors/http-errors';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  serverError: string;
  constructor(private userAuth: UserAuthService, private toaster: ToastrService, private router: Router) {
  }
  form = new FormGroup({
    Email: new FormControl('', [Validators.required, ProductValidators.cannotContainSpace]),
    Password: new FormControl('', Validators.required)
  });

  get Email() {
    return this.form.get('Email');
  }

  get Password() {
    return this.form.get('Password');
  }

  googleLogin() {
  }
  facebookLogin() {
  }
  twitterLogin() {
  }

  login(form: NgForm) {
    if (form.invalid) {
      this.serverError = 'Fill all fields with valid data';
      return;
    }
    this.userAuth.Login(form.value).subscribe(
      (response: any) => {
        localStorage.setItem('MW-AccessToken', response.access_token);
        this.userAuth.getProfile();
        this.router.navigate(['/']); // Redirect to a return url
      },
      (err: AppError) => {
        if (err instanceof BadInput) {
          this.serverError = 'Email or Password is Incorect ..'; // Display the error within Form errors
        } else throw err;
      });
  }

}