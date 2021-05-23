import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonDocsContainerComponent } from './components/button-docs-container/button-docs-container.component';

const routes: Routes = [
  { path: '', component: ButtonDocsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonDocsRoutingModule {
}
