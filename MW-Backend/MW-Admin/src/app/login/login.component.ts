import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductValidators } from '../common/validators/product.validators';
import { AdminAuthService } from '../services/admin-auth.service';
import { ToastrService } from 'ngx-toastr';
import { AppError } from '../common/errors/app-error';
import { BadInput } from '../common/errors/http-errors';
import { ADMIN_ROLE } from '../common/GlobalConstants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  flipped;
  form = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email, ProductValidators.cannotContainSpace]),
    Password: new FormControl('', Validators.required),
    StayLogged: new FormControl(true)
  });

  get StayLogged() {
    return this.form.get('StayLogged').value;
  }

  constructor(private adminAuth: AdminAuthService, private toaster: ToastrService) { }

  login() {
    if (this.form.invalid) {
      this.toaster.warning("data isn't valid");
      return;
    }
    this.adminAuth.Login(this.form.value).subscribe(
      (response: any) => {
        if (response.role === ADMIN_ROLE)
          this.adminAuth.afterAuthentication(response, this.StayLogged );
        else this.toaster.error("You're trying to log with a user account !");
      },
      (err: AppError) => {
        if (err instanceof BadInput) {
          this.toaster.error('Email or Password is Incorect ..'); // Display the error within Form errors
        } else throw err;
      });
  }

}
