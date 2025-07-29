import { Component, EventEmitter, Output } from '@angular/core';
import { UiButtonComponent } from '../../shared/ui-button/ui-button.component';
import { NgIf } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header-bar">
      <div class="left">
        <span class="logo">Universal UI Product</span>
      </div>
      <div class="center">
        <ui-button [outline]="true" (click)="onThemeSwitch.emit()" style="margin-right:.9em;">
          Switch Theme
        </ui-button>
      </div>
      <div class="right" *ngIf="isLoggedIn">
        <span class="user-info">
          <span class="username">{{ userName }}</span>
          <ui-button [outline]="true" (click)="onLogout.emit()">Logout</ui-button>
        </span>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.css'],
  imports: [UiButtonComponent, NgIf]
})
export class HeaderComponent {
  @Output() onLogout = new EventEmitter<void>();
  @Output() onThemeSwitch = new EventEmitter<void>();
  isLoggedIn = true;
  userName = 'John Doe';
}
