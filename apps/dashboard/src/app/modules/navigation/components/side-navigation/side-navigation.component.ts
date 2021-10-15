import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../../../core/state/layout/layout.service';
import { LayoutQuery } from '../../../../core/state/layout/layout.query';
import { SideNavItem } from '../../models/navigation.model';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  @Input() navItems: SideNavItem[];
  @Input() side: 'left' | 'right' = 'left';

  constructor(private layoutService: LayoutService,
              private layoutQuery: LayoutQuery) { }

  ngOnInit(): void {
  }

  updateActiveSpaces(space: string, side: string) {
    this.layoutService.updateSpace(space, 'side');
  }

}
