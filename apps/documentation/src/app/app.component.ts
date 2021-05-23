import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LibConfigPipe } from './shared/pipes/lib-config.pipe';
import { RouteModel } from './shared/models/utils.models/route.model';
import { LayoutService } from './core/services/layout.service';

@Component({
  selector: 'docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private libConfigPipe = new LibConfigPipe();

  constructor(private router: Router,
              private layoutService: LayoutService) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (e.urlAfterRedirects.includes('dashboard')) {
          layoutService.setSelectedDocs(undefined);
        } else {
          const selectedDocs: RouteModel = {
            fragment: e.urlAfterRedirects,
            title: this.libConfigPipe.transform(e.urlAfterRedirects, 'title')
          };
          layoutService.setSelectedDocs(selectedDocs);
        }
      }
    });
  }
}
