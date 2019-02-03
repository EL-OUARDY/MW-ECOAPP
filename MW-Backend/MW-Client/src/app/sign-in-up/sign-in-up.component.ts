import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductValidators } from '../common/validators/product.validators';

@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.css']
})
export class SignInUpComponent {
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

  submit(form) {
    // console.log(form);
  }
}
