import { NgModule } from '@angular/core';
import { DashButtonModule } from '../../../../../../../libs/dash-ui/src/lib/modules/dash-button/dash-button.module';
import { TreeModule } from '../../../../../../../libs/shared-ui/src/lib/modules/tree/tree.module';


@NgModule({
  imports: [DashButtonModule, TreeModule],
  exports: [DashButtonModule, TreeModule]
})
export class DashUiModule {
}
