import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { DashUiModule } from './modules/dash-ui/dash-ui.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    DashUiModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    DashUiModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
