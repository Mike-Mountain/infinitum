import { Injectable } from '@angular/core';
import { LayoutState } from './layout.model';
import { LayoutStore } from './layout.store';

@Injectable({ providedIn: 'root' })
export class LayoutService {

  constructor(private layoutStore: LayoutStore) {
  }

  updateSpace(space: string) {
    const state = {
      activeSpaces: this.addOrRemoveSpace(space, [...this.layoutStore.getValue().activeSpaces])
    };
    this.layoutStore.update(state);
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
