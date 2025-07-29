/**
 * PUBLIC_INTERFACE
 * ThemeService: Manages theme switching and current theme state.
 * Use this in the root component to change theme at runtime.
 */
import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private supportedThemes = ['default', 'theme-teal', 'theme-darkteal'];
  private activeThemeIndex = 0;

  private document = inject(DOCUMENT);

  get themeClass(): string {
    return this.supportedThemes[this.activeThemeIndex];
  }
  // PUBLIC_INTERFACE
  setTheme(idx: number): void {
    if (idx >= 0 && idx < this.supportedThemes.length) {
      this.supportedThemes.forEach(
        t => this.document.body.classList.remove(t)
      );
      this.document.body.classList.add(this.supportedThemes[idx]);
      this.activeThemeIndex = idx;
    }
  }
  // PUBLIC_INTERFACE
  cycleTheme(): void {
    this.setTheme((this.activeThemeIndex + 1) % this.supportedThemes.length);
  }

  get themeNames(): string[] {
    return ['Vibrant Pink', 'Teal Blue', 'Dark Teal'];
  }
}
