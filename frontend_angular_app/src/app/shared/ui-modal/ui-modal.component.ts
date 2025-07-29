import { Component, Input, Output, EventEmitter } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'ui-modal',
  template: `
  <div class="ui-modal-backdrop" (click)="close()" *ngIf="open"></div>
  <div class="ui-modal" *ngIf="open">
    <div class="ui-modal-content">
      <ng-content></ng-content>
    </div>
    <ui-button (click)="close()" outline style="margin: 1rem auto 0 auto; display:block">Close</ui-button>
  </div>
  `,
  styleUrls: ['./ui-modal.component.css']
})
export class UiModalComponent {
  @Input() open: boolean = false;
  @Output() closed = new EventEmitter<void>();
  close() { this.closed.emit(); }
}
