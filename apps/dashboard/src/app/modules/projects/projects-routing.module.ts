import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectContainerComponent } from './components/project-container/project-container.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {path: ':fileName', component: ProjectContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
