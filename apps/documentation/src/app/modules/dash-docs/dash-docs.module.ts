import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashDocsRoutingModule } from './dash-docs-routing.module';
import { DashLibContainerComponent } from './components/dash-lib-container/dash-lib-container.component';


@NgModule({
  declarations: [
    DashLibContainerComponent
  ],
  imports: [
    CommonModule,
    DashDocsRoutingModule
  ]
})
export class DashDocsModule { }
