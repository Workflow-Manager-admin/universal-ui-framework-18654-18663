import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent {
  // Theme switching handled by MainLayout/Header; nothing to do here.
}
