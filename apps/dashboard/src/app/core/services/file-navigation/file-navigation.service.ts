import { Injectable } from '@angular/core';
import { ProjectsQuery } from '../../../modules/projects/store/projects.query';
import { ProjectsService } from '../../../modules/projects/store/projects.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project, ProjectFlatNode, ProjectNode } from '../../../modules/projects/store/project.model';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';


@Injectable({
  providedIn: 'root'
})
export class FileNavigationService {

  public treeFlattener: MatTreeFlattener<ProjectNode, ProjectFlatNode>;
  public dataSource: MatTreeFlatDataSource<ProjectNode, ProjectFlatNode, ProjectFlatNode>;
  public treeControl = new FlatTreeControl<ProjectFlatNode>(
    node => node.level, node => node.expandable
  );
  private _transformer = (node: ProjectNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      path: node.path,
      id: node.id,
      level: level
    };
  };

  constructor(private projectQuery: ProjectsQuery, private projectService: ProjectsService) {
    this.treeFlattener = new MatTreeFlattener(
      this._transformer,
      node => node.level,
      node => node.expandable,
      node => node.children
    );
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  }

  public getMockData(): Observable<ProjectNode[]> {
    if (!this.projectQuery.getHasCache()) {
      return this.projectService.getAllProjects().pipe(
        map(item => this.formatData(item))
      );
    } else {
      return this.projectQuery.selectAll().pipe(
        map(item => this.formatData(item))
      );
    }
  }

  private formatData(data: Project[]): ProjectNode[] {
    return data?.map((project) => {
      return {
        name: project.title,
        isRootNode: project.isRootNode,
        id: project.id,
        path: project.routePath,
        children: this.formatData(project.files)
      } as ProjectNode;
    });
  }
}
