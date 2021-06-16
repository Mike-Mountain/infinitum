import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { SharedModule } from '../../shared/shared.module';
import { DashButtonModule } from '../../../../../../libs/dash-ui/src/lib/modules/dash-button/dash-button.module';


@NgModule({
  declarations: [
    TodoContainerComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    DashButtonModule
  ]
})
export class TodoModule { }
