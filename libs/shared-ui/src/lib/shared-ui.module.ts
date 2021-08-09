import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule } from './modules/tree/tree.module';
import { DataTableModule } from './modules/data-table/data-table.module';

@NgModule({
  imports: [CommonModule],
  exports: [TreeModule, DataTableModule]
})
export class SharedUiModule {
}
