import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { FileNavigationStore } from './file-navigation.store';
import { FileNavigationState } from './file-navigation.model';

@Injectable({ providedIn: 'root' })
export class FileNavigationQuery extends Query<FileNavigationState> {

  constructor(protected store: FileNavigationStore) {
    super(store);
  }

}
