import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinosaurRoutingModule } from './dinosaur-routing.module';
import { DinosaurListComponent } from './components/dinosaur-list/dinosaur-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DinosaurService } from './store/dinosaur.service';
import { DataTableModule } from '@infinitum/shared-ui';


@NgModule({
  declarations: [
    DinosaurListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DinosaurRoutingModule,
    DataTableModule
  ],
  providers: [DinosaurService]
})
export class DinosaurModule {
}
