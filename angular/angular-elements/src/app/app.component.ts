import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultButtonComponent } from "./components/default-button/default-button.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { DropdownScriptedComponent } from "./components/dropdown-scripted/dropdown-scripted.component";
import { TextInputComponent } from "./components/text-input/text-input.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupLoginComponent } from "./components/signup-login/signup-login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DefaultButtonComponent, DropdownComponent, DropdownScriptedComponent, TextInputComponent, NavbarComponent, SignUpComponent, LoginComponent, SignupLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-elements';
}
