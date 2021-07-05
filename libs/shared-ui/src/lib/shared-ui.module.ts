import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule } from './modules/tree/tree.module';

@NgModule({
  imports: [CommonModule],
  exports: [TreeModule]
})
export class SharedUiModule {
}
