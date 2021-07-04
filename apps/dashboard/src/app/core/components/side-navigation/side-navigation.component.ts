import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../state/layout/layout.service';
import { LayoutQuery } from '../../state/layout/layout.query';
import { LayoutState } from '../../state/layout/layout.model';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  constructor(private layoutService: LayoutService,
              private layoutQuery: LayoutQuery) { }

  ngOnInit(): void {
  }

  updateActiveSpaces(space: string) {
    this.layoutService.updateSpace(space);
    console.log(this.layoutQuery.getValue());
  }
}
