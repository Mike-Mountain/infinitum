import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { createProject, Project } from './project.model';
import { ProjectsStore } from './projects.store';
import { ApiPath, BaseHttpService } from '@infinitum/shared-data';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProjectsService extends BaseHttpService {

  constructor(private projectsStore: ProjectsStore,
              protected http: HttpClient
  ) {
    super(http);
    super.apiUrl = environment.apiUrl;
  }

  getAllProjects(): Observable<Project[]> {
    return super._get<Project[]>(ApiPath.PROJECTS)
      .pipe(
        map(entities => entities.map(entity => createProject(entity))),
        tap(entities => this.projectsStore.set(entities)),
        catchError(err => {
          console.log(err);
          return of([] as Project[]);
        })
      );
  }

  getProjectById(id: number): Observable<Project> {
    return super._get<Project>(ApiPath.PROJECTS, id)
      .pipe(
        map(entity => createProject(entity)),
        tap(entity => this.projectsStore.update(entity))
      );
  }

  addProject(project: Project): Observable<Project> {
    return super._post<Project>(ApiPath.PROJECTS, project)
      .pipe(
        map(entity => createProject(entity)),
        tap(entity => this.projectsStore.add(entity))
      );
  }

  updateProject(id, project: Project): Observable<Project> {
    return super._put<Project>(ApiPath.PROJECTS, id, project)
      .pipe(
        map(entity => createProject(entity)),
        tap(entity => this.projectsStore.update(id, entity))
      );
  }

  removeProject(id: number): Observable<Project> {
    return super._delete<Project>(ApiPath.PROJECTS, id)
      .pipe(
        tap(() => this.projectsStore.remove(id))
      );
  }

}
