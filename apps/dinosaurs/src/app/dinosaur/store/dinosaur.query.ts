import { Injectable } from '@angular/core';
import { EntityState, QueryEntity } from '@datorama/akita';
import { DinosaurStore} from './dinosaur.store';
import { Dinosaur } from './dinosaur.model';

@Injectable({
  providedIn: 'root'
})
export class DinosaurQuery extends QueryEntity<EntityState<Dinosaur>, Dinosaur> {

  constructor(protected store: DinosaurStore) {
    super(store);
  }

}
