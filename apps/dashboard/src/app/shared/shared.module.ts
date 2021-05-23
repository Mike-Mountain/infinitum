import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { DashUiModule } from './modules/dash-ui/dash-ui.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    DashUiModule
  ],
  exports: [
    MaterialModule,
    DashUiModule
  ]
})
export class SharedModule {
}
