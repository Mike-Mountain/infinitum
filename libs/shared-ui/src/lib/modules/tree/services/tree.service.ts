import { Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { InfFlatTreeNode, InfTreeNode } from '../models/tree.model';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  public treeFlattener: MatTreeFlattener<InfTreeNode, InfFlatTreeNode>;
  public dataSource: MatTreeFlatDataSource<InfTreeNode, InfFlatTreeNode, InfFlatTreeNode>;
  public treeControl = new FlatTreeControl<InfFlatTreeNode>(
    node => node.level, node => node.expandable
  );

  private _transformer = (node: InfTreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      path: node.path,
      icon: node.icon,
      id: node.id,
      level: level
    };
  };

  constructor() {
    this.treeFlattener = new MatTreeFlattener(
      this._transformer,
      node => node.level,
      node => node.expandable,
      node => node.children
    );
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  }
}
