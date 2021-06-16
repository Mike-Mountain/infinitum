import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectContainerComponent } from './components/project-container/project-container.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'simple-todo',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'simpleTodo',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './Module'
      }).then(m => m.AppModule)
  },
  {path: ':fileName', component: ProjectContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
