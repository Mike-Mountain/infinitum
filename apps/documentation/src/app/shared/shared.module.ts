import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { LibConfigPipe } from './pipes/lib-config.pipe';

@NgModule({
  declarations: [
    LibConfigPipe
  ],
  exports: [MaterialModule]
})
export class SharedModule {

}
