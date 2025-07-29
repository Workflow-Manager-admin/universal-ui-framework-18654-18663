import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../../shared/theme.service';
import { inject } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-main-layout',
  standalone: true,
  template: `
    <app-header (onLogout)="logout()" (onThemeSwitch)="themeSwitch()"></app-header>
    <div class="layout-body">
      <app-sidebar></app-sidebar>
      <main class="main-view">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrls: ['./main-layout.component.css'],
  imports: [HeaderComponent, SidebarComponent, RouterOutlet]
})
export class MainLayoutComponent {
  private themeService = inject(ThemeService);

  logout() {
    // Simulated: implement real logout as required.
    // Optionally trigger logout via a global auth service.
    // Remove alert for SSR compatibility.
  }
  themeSwitch() {
    this.themeService.cycleTheme();
  }
}
