import { Component } from '@angular/core';
import { UiCardComponent } from '../../shared/ui-card/ui-card.component';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-firmware',
  standalone: true,
  template: `
    <ui-card>
      <h2>Firmware Management</h2>
      <p>Coming soon: firmware upload, list, upgrades, scheduling</p>
    </ui-card>
  `,
  imports: [UiCardComponent]
})
export class FirmwareComponent {}
