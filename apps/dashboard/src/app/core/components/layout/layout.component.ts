import { Component, OnInit } from '@angular/core';
import { LayoutQuery } from '../../state/layout/layout.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public activeSpaces: Observable<string[]>;

  constructor(private layoutQuery: LayoutQuery) {
    this.activeSpaces = layoutQuery.select(state => state.activeSpaces);
  }

  ngOnInit(): void {
  }

}
