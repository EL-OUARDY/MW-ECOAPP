import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductValidators } from 'src/app/common/validators/product.validators';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor() {
  }
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6), ProductValidators.cannotContainSpace]),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  googleLogin() {
  }
  facebookLogin() {
  }
  twitterLogin() {
  }

  submit(form) {
    // console.log(form);
  }

}
