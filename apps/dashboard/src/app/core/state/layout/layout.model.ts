export interface LayoutState {
  activeSpaces: Array<string>
}

export function createLayout(params: Partial<LayoutState>) {
  return {
    activeSpaces: params?.activeSpaces || []
  } as LayoutState;
}
