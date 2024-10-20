import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropDownDirective } from './dropdown-scripted.directive';

@Component({
  selector: 'app-dropdown-scripted',
  standalone: true,
  imports: [CommonModule, DropDownDirective],
  templateUrl: './dropdown-scripted.component.html',
  styleUrl: './dropdown-scripted.component.scss',
})
export class DropdownScriptedComponent {}
