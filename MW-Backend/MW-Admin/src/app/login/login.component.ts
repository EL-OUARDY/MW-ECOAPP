import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductValidators } from '../common/validators/product.validators';

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
    stayLogged: new FormControl(false)
  });

  get Email() {
    return this.form.get('Email');
  }

  get Password() {
    return this.form.get('Password');
  }
  constructor() { }

  login() {
    if (this.form.invalid) return; //
    console.log(this.form.value);
  }

}
