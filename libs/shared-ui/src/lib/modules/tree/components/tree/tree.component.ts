import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TreeService } from '../../services/tree.service';
import { InfFlatTreeNode, InfTreeNode } from '../../models/tree.model';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource } from '@angular/material/tree';

@Component({
  selector: 'inf-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() public activeTreeNode: string | undefined;

  @Input()
  public set data(value: InfTreeNode[]) {
    if (value) {
      this.treeData = value || [];
      this.dataSource.data = this.treeData;
    }
  }

  public get data(): InfTreeNode[] {
    return this.treeData;
  }

  @Output() private selectedNode = new EventEmitter<InfTreeNode>();

  public treeControl: FlatTreeControl<InfFlatTreeNode>;
  public dataSource: MatTreeFlatDataSource<InfTreeNode, InfFlatTreeNode, InfFlatTreeNode>;
  private treeData: InfTreeNode[] = [];

  constructor(private treeService: TreeService) {
    this.dataSource = treeService.dataSource;
    this.treeControl = treeService.treeControl;
  }

  public hasChild = (_: number, node: InfFlatTreeNode) => node.expandable;

  ngOnInit(): void {

  }

  public navigateToNode(node: InfTreeNode): void {
    this.selectedNode.emit(node);
  }
}
