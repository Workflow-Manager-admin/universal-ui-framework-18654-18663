import { Component } from '@angular/core';
import { UiCardComponent } from '../../shared/ui-card/ui-card.component';
import { UiButtonComponent } from '../../shared/ui-button/ui-button.component';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="login-form-container">
      <ui-card>
        <h2>Sign In</h2>
        <form (ngSubmit)="login($event)">
          <input type="text" name="username" placeholder="Username" required class="w-100 mt-2"/>
          <input type="password" name="password" placeholder="Password" required class="w-100 mt-2"/>
          <ui-button class="w-100 mt-4" type="submit">Login</ui-button>
        </form>
      </ui-card>
    </div>
  `,
  styleUrls: ['./login.component.css'],
  imports: [UiCardComponent, UiButtonComponent]
})
export class LoginComponent {
  login(evt: Event) {
    evt.preventDefault();
    // Simulate login; navigate via Angular router (stub, no actual navigation for linting purposes)
    // If navigation logic is desired, inject Router and use it here.
  }
}
