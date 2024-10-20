import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-msg.component.html',
  styleUrl: './error-msg.component.scss',
})
export class ErrorMsgComponent {
  @Input() errorCondition1!: boolean;
  @Input() errorCondition2?: boolean = true;
  @Input() errMsg!: string;
}
