import { ProjectNode } from '../../../modules/projects/store/project.model';

export interface FileNavigationState {
  id: string;
  projects: ProjectNode[];
  selectedProject: ProjectNode;
  selectedFile: ProjectNode;
}

export function createFileNavigation(params: Partial<FileNavigationState>) {
  return {
    id: params?.id,
    projects: params?.projects || [],
    selectedProject: params?.selectedProject,
    selectedFile: params?.selectedFile
  } as FileNavigationState;
}

export function createInitialState(): Partial<FileNavigationState> {
  return {
    id: '',
    projects: [],
    selectedProject: undefined,
    selectedFile: undefined
  } as FileNavigationState;
}
