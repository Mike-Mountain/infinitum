export type SideSpaces = 'projects' | 'blog';
export type BottomSpaces = 'projects' | 'blog';

export interface LayoutState {
  activeSpacesTop: Array<string>
  activeSpacesBottom: Array<string>
}

export function createLayout(params: Partial<LayoutState>) {
  return {
    activeSpacesTop: params?.activeSpacesTop || [],
    activeSpacesBottom: params?.activeSpacesBottom || []
  } as LayoutState;
}
