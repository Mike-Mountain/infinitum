import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dinosaurs', loadChildren: () => import('./dinosaur/dinosaur.module').then(m => m.DinosaurModule) },
  {path: '', pathMatch: 'full', redirectTo: 'dinosaurs'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
