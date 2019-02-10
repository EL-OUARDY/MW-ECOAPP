import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductValidators } from 'src/app/common/validators/product.validators';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private userAuth: UserAuthService, private toaster: ToastrService) {
  }
  form = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.minLength(6), ProductValidators.cannotContainSpace]),
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

  submit(form) {
    this.userAuth.Login(form.value);
  }

}
