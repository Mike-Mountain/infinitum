import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { createLayout, LayoutState } from './layout.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'layout' })
export class LayoutStore extends Store<LayoutState> {

  constructor() {
    super(createLayout({
      activeSpacesTop: ['projects']
    }));
  }

}
