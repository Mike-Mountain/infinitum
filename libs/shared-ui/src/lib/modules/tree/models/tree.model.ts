export class InfTreeNode {
  id: string;
  isProjectRoot: boolean;
  name: string;
  path: string;
  icon: string;
  children?: InfTreeNode[];

  constructor(data: InfTreeNode) {
    this.id = data.id;
    this.isProjectRoot = data.isProjectRoot;
    this.name = data.name;
    this.path = data.path;
    this.icon = data.icon;
    this.children = data.children || [];
  }
}

export class InfFlatTreeNode {
  expandable: boolean;
  name: string;
  level: number;

  constructor(data: InfFlatTreeNode) {
    this.expandable = data.expandable;
    this.name = data.name;
    this.level = data.level;
  }
}
