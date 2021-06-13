export interface ProjectNode {
  id: number | string;
  name: string;
  path: string;
  children?: ProjectNode[];
}

export interface ProjectFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


export interface Project {
  id: number | string;
  isRootNode: boolean;
  title: string;
  files: any[];
  routePath: string;
}

export function createProject(params: Partial<Project>) {
  return {
    id: params?.id,
    isRootNode: params?.isRootNode,
    title: params?.title,
    files: params?.files || [],
    routePath: params?.routePath
  } as Project;
}
