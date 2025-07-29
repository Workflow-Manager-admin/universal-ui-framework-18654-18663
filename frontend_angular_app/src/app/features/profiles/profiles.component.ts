import { Component } from '@angular/core';
import { UiCardComponent } from '../../shared/ui-card/ui-card.component';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-profiles',
  standalone: true,
  template: `
    <ui-card>
      <h2>Profile Management</h2>
      <p>Coming soon: summary cards, virtual table, CRUD, CSV upload</p>
    </ui-card>
  `,
  imports: [UiCardComponent]
})
export class ProfilesComponent {}
