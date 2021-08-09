import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinosaurListComponent } from './components/dinosaur-list/dinosaur-list.component';

const routes: Routes = [
  { path: 'list', component: DinosaurListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinosaurRoutingModule {
}
