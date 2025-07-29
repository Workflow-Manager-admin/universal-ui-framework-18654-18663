import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'ui-card',
  standalone: true,
  template: `
  <div class="ui-card" [ngStyle]="customStyle">
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./ui-card.component.css'],
  imports: [NgStyle]
})
export class UiCardComponent {
  @Input() customStyle: {[key: string]: string} = {};
}
