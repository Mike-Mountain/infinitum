import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashLibContainerComponent } from './components/dash-lib-container/dash-lib-container.component';

const routes: Routes = [
  { path: 'landing', component: DashLibContainerComponent },
  {
    path: 'buttons',
    loadChildren: () => import('./modules/button-docs/button-docs.module').then(m => m.ButtonDocsModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'landing' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashDocsRoutingModule {
}
