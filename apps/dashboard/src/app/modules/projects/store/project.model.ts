export interface ProjectNode {
  id: string;
  isProjectRoot: boolean;
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
  id: string;
  isProjectRoot: boolean;
  title: string;
  files: any[];
  routePath: string;
}

export function createProject(params: Partial<Project>) {
  return {
    id: params?.id,
    isProjectRoot: params?.isProjectRoot,
    title: params?.title,
    files: params?.files || [],
    routePath: params?.routePath
  } as Project;
}
