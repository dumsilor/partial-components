import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { confirmPassword } from '../sign-up/sign-up.validator';

@Component({
  selector: 'app-signup-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signup-login.component.html',
  styleUrl: './signup-login.component.scss',
})
export class SignupLoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  loginObj = {
    userName: '',
    password: '',
  };

  signUpForm = new FormGroup(
    {
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', Validators.required),
    },
    {
      validators: confirmPassword('password', 'confirmPassword'),
    }
  );

  signUpObj = {
    userName: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: '',
  };

  onSignUpSubmit() {
}

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
