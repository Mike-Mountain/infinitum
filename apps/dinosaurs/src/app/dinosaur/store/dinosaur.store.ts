import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Dinosaur } from './dinosaur.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'dinosaur' })
export class DinosaurStore extends EntityStore<EntityState<Dinosaur>, Dinosaur> {

  constructor() {
    super();
  }

}

