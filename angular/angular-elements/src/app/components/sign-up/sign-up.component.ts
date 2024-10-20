import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { confirmPassword } from './sign-up.validator';
import { ErrorMsgComponent } from './partials/error-msg/error-msg.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ErrorMsgComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
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

  onSubmit() {
    console.log(this.signUpForm.get('password')?.invalid);
  }

  get fc() {
    return this.signUpForm.controls;
  }
}
