import { NgModule } from '@angular/core';
import { DashButtonModule } from '../../../../../../../libs/dash-ui/src/lib/modules/dash-button/dash-button.module';


@NgModule({
  imports: [DashButtonModule],
  exports: [DashButtonModule]
})
export class DashUiModule {
}
