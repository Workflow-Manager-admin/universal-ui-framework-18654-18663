import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { UiToastComponent } from './ui-toast/ui-toast.component';
import { UiLoaderComponent } from './ui-loader/ui-loader.component';

@NgModule({
  declarations: [
    UiButtonComponent,
    UiCardComponent,
    UiModalComponent,
    UiToastComponent,
    UiLoaderComponent
  ],
  imports: [CommonModule],
  exports: [
    UiButtonComponent,
    UiCardComponent,
    UiModalComponent,
    UiToastComponent,
    UiLoaderComponent
  ]
})
export class SharedModule {}
