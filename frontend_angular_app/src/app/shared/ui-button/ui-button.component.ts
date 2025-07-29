import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'ui-button',
  standalone: true,
  template: `
    <button [class.outline]="outline" [disabled]="disabled" [ngStyle]="styleObj">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./ui-button.component.css'],
  imports: [NgStyle]
})
export class UiButtonComponent {
  @Input() outline = false;
  @Input() disabled = false;

  get styleObj() {
    return {
      cursor: this.disabled ? 'not-allowed' : 'pointer'
    }
  }
}
