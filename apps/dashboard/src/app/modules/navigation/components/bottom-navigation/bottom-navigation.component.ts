import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../core/state/layout/layout.service';
import { LayoutQuery } from '../../../../core/state/layout/layout.query';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent implements OnInit {

  constructor(private layoutService: LayoutService,
              private layoutQuery: LayoutQuery) { }

  ngOnInit(): void {
  }

  public updateActiveSpaces(space: string) {
    this.layoutService.updateSpace(space, 'bottom');
  }

}
