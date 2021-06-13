import { Component, OnInit } from '@angular/core';
import { FileNavigationService } from '../../services/file-navigation/file-navigation.service';
import { Router } from '@angular/router';
import { ProjectsService } from '../../../modules/projects/store/projects.service';
import { ProjectFlatNode, ProjectNode } from '../../../modules/projects/store/project.model';
import { MatTreeFlatDataSource } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-file-navigation',
  templateUrl: './file-navigation.component.html',
  styleUrls: ['./file-navigation.component.scss']
})
export class FileNavigationComponent implements OnInit {

  activeTreeNode: string;
  dataSource: MatTreeFlatDataSource<ProjectNode, ProjectFlatNode, ProjectFlatNode>;
  treeControl: FlatTreeControl<ProjectFlatNode>;

  constructor(private fileNavigationService: FileNavigationService, private router: Router) {
    fileNavigationService.getMockData().subscribe(data => {
      this.fileNavigationService.dataSource.data = data;
      this.treeControl = this.fileNavigationService.treeControl;
      this.dataSource = this.fileNavigationService.dataSource;
    });
  }

  hasChild = (_: number, node: ProjectFlatNode) => node.expandable;

  ngOnInit(): void {
  }

  navigateToNode(node: ProjectNode) {
    this.activeTreeNode = node.name;
    this.router.navigateByUrl(`/projects/${node.path}`);
  }
}
