export type SideSpaces = 'projects' | 'blog';
export type BottomSpaces = 'projects' | 'blog';

export interface LayoutState {
  activeSpacesSide: Array<string>
  activeSpacesBottom: Array<string>
  activeProject: string;
}

export function createLayout(params: Partial<LayoutState>) {
  return {
    activeSpacesSide: params?.activeSpacesSide || [],
    activeSpacesBottom: params?.activeSpacesBottom || [],
    activeProject: params?.activeProject
  } as LayoutState;
}
