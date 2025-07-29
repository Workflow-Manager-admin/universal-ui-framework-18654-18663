import { Component, Input } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'ui-loader',
  template: `<div class="spinner" [style.width.px]="size" [style.height.px]="size"></div>`
})
export class UiLoaderComponent {
  @Input() size = 36;
}
