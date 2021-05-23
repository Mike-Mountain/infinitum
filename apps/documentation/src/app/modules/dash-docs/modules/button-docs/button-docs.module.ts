import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonDocsRoutingModule } from './button-docs-routing.module';
import { ButtonDocsContainerComponent } from './components/button-docs-container/button-docs-container.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ButtonDocsExamplesComponent } from './components/button-docs-examples/button-docs-examples.component';
import { ButtonModule } from '../../../../../../../../libs/dash-ui/src/lib/modules/button/button.module';


@NgModule({
  declarations: [
    ButtonDocsContainerComponent,
    ButtonDocsExamplesComponent
  ],
  imports: [
    CommonModule,
    ButtonDocsRoutingModule,
    SharedModule,
    ButtonModule
  ]
})
export class ButtonDocsModule { }
