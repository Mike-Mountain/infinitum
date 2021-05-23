import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './components/button/button.component';
import { ButtonClassPipe } from './pipes/button-class.pipe';


@NgModule({
  declarations: [
    ButtonComponent,
    ButtonClassPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class DashButtonModule {
}