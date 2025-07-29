import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside class="sidebar">
      <nav>
        <ul>
          <li *ngFor="let item of navItems"
              [routerLinkActive]="'active'"
              [routerLink]="item.route">
            <span class="icon">{{ item.icon }}</span>
            <span class="lbl">{{ item.label }}</span>
          </li>
        </ul>
      </nav>
    </aside>
  `,
  styleUrls: ['./sidebar.component.css'],
  imports: [RouterLink, RouterLinkActive]
})
export class SidebarComponent {
  @Input() navItems = [
    { label: 'Dashboard', route: '/dashboard', icon: '🏠' },
    { label: 'Profiles', route: '/profiles', icon: '👤' },
    { label: 'Devices', route: '/devices', icon: '🖥️' },
    { label: 'Firmware', route: '/firmware', icon: '📝' }
  ];
}
