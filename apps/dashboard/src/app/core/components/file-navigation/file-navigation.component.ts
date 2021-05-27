import { Component, OnInit } from '@angular/core';
import {
  FileNavigationService,
  ProjectFlatNode,
  ProjectNode
} from '../../services/file-navigation/file-navigation.service';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-file-navigation',
  templateUrl: './file-navigation.component.html',
  styleUrls: ['./file-navigation.component.scss']
})
export class FileNavigationComponent implements OnInit {

  public activeTreeNode: string;
  public treeFlattener: MatTreeFlattener<ProjectNode, ProjectFlatNode>;
  public dataSource: MatTreeFlatDataSource<ProjectNode, ProjectFlatNode, ProjectFlatNode>;
  public treeControl = new FlatTreeControl<ProjectFlatNode>(
    node => node.level, node => node.expandable
  );
  private _transformer = (node: ProjectNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      id: node.id,
      level: level
    };
  };

  constructor(private fileNavigationService: FileNavigationService) {
    this.treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = fileNavigationService.getMockData();
  }

  hasChild = (_: number, node: ProjectFlatNode) => node.expandable;

  ngOnInit(): void {
  }

}
