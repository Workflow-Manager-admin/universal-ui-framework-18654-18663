import { Component, Input } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'ui-toast',
  template: `<div *ngIf="visible" class="ui-toast" [ngClass]="type">{{ message }}</div>`,
  styleUrls: ['./ui-toast.component.css']
})
export class UiToastComponent {
  @Input() message: string = '';
  @Input() visible = false;
  @Input() type: 'success' | 'error' | 'info' = 'info';
}
