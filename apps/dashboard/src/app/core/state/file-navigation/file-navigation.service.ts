import { Injectable } from '@angular/core';
import { ProjectsQuery } from '../../../modules/projects/store/projects.query';
import { ProjectsService } from '../../../modules/projects/store/projects.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Project } from '../../../modules/projects/store/project.model';
import { FileNavigationStore } from './file-navigation.store';
import { InfTreeNode } from '../../../../../../../libs/shared-ui/src/lib/modules/tree/models/tree.model';


@Injectable({
  providedIn: 'root'
})
export class FileNavigationService {

  constructor(private projectQuery: ProjectsQuery,
              private projectService: ProjectsService,
              private fileNavigationStore: FileNavigationStore) {
  }

  public getMockData(): Observable<InfTreeNode[]> {
    if (!this.projectQuery.getHasCache()) {
      return this.projectService.getAllProjects().pipe(
        map(data => this.formatData(data)),
        tap(projects => this.fileNavigationStore.update(() => ({ projects })))
      );
    } else {
      return this.projectQuery.selectAll().pipe(
        map(data => this.formatData(data)),
        tap(projects => this.fileNavigationStore.update(() => ({ projects })))
      );
    }
  }

  public setSelectedProject(selectedProject: InfTreeNode) {
    this.fileNavigationStore.update(() => ({ selectedProject }));
  }

  public setSelectedFile(selectedField: InfTreeNode) {
    this.fileNavigationStore.update(() => ({
      selectedFile: selectedField
    }));
  }

  public removeSelectedFile(selected: InfTreeNode) {
    const selectedFields = new Set(this.fileNavigationStore.getValue().activeFiles);
    selectedFields.delete(selected);
    const selectedFieldsArray = [...selectedFields];
    this.fileNavigationStore.update(() => ({
      activeFiles: selectedFieldsArray
    }));
    const newField = selectedFieldsArray[selectedFieldsArray.length - 1];
    this.setSelectedFile(newField);
    this.updateActiveNode(newField?.name);
  }

  public addActiveFiles(newFile: InfTreeNode) {
    const activeFiles = new Set(this.fileNavigationStore.getValue().activeFiles);
    activeFiles.add(newFile);
    this.fileNavigationStore.update(() => ({
      activeFiles: [...activeFiles]
    }));
  }

  public updateActiveNode(activeTreeNode: string) {
    this.fileNavigationStore.update(() => ({ activeTreeNode }));
  }

  private formatData(data: Project[]): InfTreeNode[] {
    return data?.map((project) => {
      return {
        name: project.title,
        isProjectRoot: project.isProjectRoot,
        id: project.id,
        path: project.routePath,
        icon: project.icon,
        children: this.formatData(project.files)
      } as InfTreeNode;
    });
  }
}
