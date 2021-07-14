import { Component, OnInit } from '@angular/core';
import { LayoutQuery } from '../../state/layout/layout.query';
import { Observable } from 'rxjs';
import { LayoutState } from '../../state/layout/layout.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public activeSpaces: Observable<LayoutState>;

  constructor(private layoutQuery: LayoutQuery) {
    this.activeSpaces = layoutQuery.select();
  }

  ngOnInit(): void {
  }

}
