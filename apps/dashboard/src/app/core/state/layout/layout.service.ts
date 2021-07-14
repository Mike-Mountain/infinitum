import { Injectable } from '@angular/core';
import { LayoutState } from './layout.model';
import { LayoutStore } from './layout.store';

@Injectable({ providedIn: 'root' })
export class LayoutService {

  constructor(private layoutStore: LayoutStore) {
  }

  updateSpace(space: string, origin: string) {
    let state: Partial<LayoutState>;
    if (origin === 'side') {
      state = {
        activeSpacesTop: this.addOrRemoveSpace(space, [...this.layoutStore.getValue().activeSpacesTop])
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
