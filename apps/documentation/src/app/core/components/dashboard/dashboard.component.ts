import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { Router } from '@angular/router';
import { RouteModel } from '../../../shared/models/utils.models/route.model';
import { libraries } from '../../../shared/constants/libraries.const';

@Component({
  selector: 'docs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public libs = libraries;

  constructor(private layoutService: LayoutService,
              private router: Router) {
  }

  public routeToLib(selectedDocs: RouteModel): void {
    this.layoutService.setSelectedDocs(selectedDocs);
    this.router.navigateByUrl(`/${selectedDocs.fragment}`);
  }

}
