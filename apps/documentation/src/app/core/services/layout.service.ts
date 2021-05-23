import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RouteModel } from '../../shared/models/utils.models/route.model';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private selectedDocsSrc = new BehaviorSubject<RouteModel | undefined>(undefined);

  constructor() {
  }

  public setSelectedDocs(selectedDocs: RouteModel | undefined): void {
    this.selectedDocsSrc.next(selectedDocs);
  }

  public fetchSelectedDocs$(): Observable<RouteModel | undefined> {
    return this.selectedDocsSrc.asObservable();
  }

  public getSelectedDocs(): RouteModel | undefined {
    return this.selectedDocsSrc.value;
  }
}
