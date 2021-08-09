import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DinosaurStore } from './dinosaur.store';
import { Dinosaur } from './dinosaur.model';
import { ApiPath, BaseHttpService } from '@infinitum/shared-data';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DinosaurService extends BaseHttpService {

  constructor(private dinosaurStore: DinosaurStore,
              protected http: HttpClient) {
    super(http);
    super.apiUrl = environment.apiUrl;
  }

  public getAllDinos(): Observable<Dinosaur[]> {
    return this.http.get<Dinosaur[]>('http://localhost:3333/api/dinosaur').pipe(
      tap(dinos => this.dinosaurStore.add(dinos))
    );
  }

  public getDinosaurByName(name: string): Observable<Dinosaur> {
    return super._get(ApiPath.DINOS, name);
  }
}
