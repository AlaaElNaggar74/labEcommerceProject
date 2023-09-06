import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
Validators,
  FormBuilder,
} from '@angular/forms';
// import { CustomvaldiatorxService } from '../services/customvaldiatorx.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(
    public fb: FormBuilder,
    public _router: Router,
    // public _customvalidator: CustomvaldiatorxService
  ) {}

  userForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,4}$'),
        ],
      ],
      userName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')],
      ],

      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }
    // ,
    // {
    //   validator: this._customvalidator.passwordMatchValidator(
    //     'password',
    //     'confirmPassword'
    //   ),
    // }
  );

  submitUserForm() {
    console.log(this.userForm);
    this._router.navigate(['/signin']);
  }
}
