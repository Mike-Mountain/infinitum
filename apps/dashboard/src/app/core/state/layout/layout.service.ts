import { Injectable } from '@angular/core';
import { LayoutState } from './layout.model';
import { LayoutStore } from './layout.store';

@Injectable({ providedIn: 'root' })
export class LayoutService {

  constructor(private layoutStore: LayoutStore) {
  }

  updateActiveProject(project: string) {
    this.layoutStore.update({activeProject: project})
  }

  updateSpace(space: string, origin: string) {
    // TODO: Add spaces to right or left content area
    let state: Partial<LayoutState>;
    if (origin === 'side') {
      state = {
        activeSpacesSide: this.addOrRemoveSpace(space, [...this.layoutStore.getValue().activeSpacesSide])
      }
    } else {
      state = {
        activeSpacesBottom: this.addOrRemoveSpace(space, [...this.layoutStore.getValue().activeSpacesBottom])
      }
    }
    this.layoutStore.update(state);
    console.log(this.layoutStore.getValue());
  }

  addOrRemoveSpace(space: string, spaces: string[]): string[] {
    if (spaces.includes(space)) {
      spaces = spaces.filter(item => item !== space);
    } else {
      spaces.push(space);
    }
    return spaces;
  }

}
