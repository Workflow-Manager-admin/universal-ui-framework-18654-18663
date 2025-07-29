import { Component } from '@angular/core';
import { UiCardComponent } from '../../shared/ui-card/ui-card.component';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-devices',
  standalone: true,
  template: `
    <ui-card>
      <h2>Device Management</h2>
      <p>Coming soon: search by MAC/IP, device actions, syslog, etc.</p>
    </ui-card>
  `,
  imports: [UiCardComponent]
})
export class DevicesComponent {}
