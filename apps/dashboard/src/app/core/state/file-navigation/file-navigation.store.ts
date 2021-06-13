import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { createInitialState, FileNavigationState } from './file-navigation.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'file-navigation' })
export class FileNavigationStore extends Store<FileNavigationState> {

  constructor() {
    super(createInitialState());
  }

}
