import { Component } from '@angular/core';
import { UiCardComponent } from '../../shared/ui-card/ui-card.component';
import { UiLoaderComponent } from '../../shared/ui-loader/ui-loader.component';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <ui-card>
      <h2>Dashboard</h2>
      <p>[Graph for profile/device growth, recent activity, stats go here]</p>
      <ui-loader></ui-loader>
    </ui-card>
  `,
  imports: [UiCardComponent, UiLoaderComponent]
})
export class DashboardComponent {}
