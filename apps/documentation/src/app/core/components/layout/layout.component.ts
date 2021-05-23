import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, ReplaySubject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../services/layout.service';
import { RouteModel } from '../../../shared/models/utils.models/route.model';
import { libraries } from '../../../shared/constants/libraries.const';
import { Router } from '@angular/router';

@Component({
  selector: 'docs-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  public isHandset$: Observable<boolean> | undefined;
  public hasDrawer = false;
  public libs = libraries;
  public selectedDocs$: Observable<RouteModel | undefined>;
  private destroyed$ = new ReplaySubject<boolean>(1);

  constructor(private breakpointObserver: BreakpointObserver,
              private layoutService: LayoutService,
              private router: Router) {
    this.selectedDocs$ = layoutService.fetchSelectedDocs$();
  }

  ngOnInit(): void {
    this.layoutService.fetchSelectedDocs$()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(selectedDocs => this.hasDrawer = !!selectedDocs);
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public setSelectedLib(selectedDocs: RouteModel): void {
    this.layoutService.setSelectedDocs(selectedDocs);
    this.router.navigateByUrl(`/${selectedDocs.fragment}`);
  }

}
