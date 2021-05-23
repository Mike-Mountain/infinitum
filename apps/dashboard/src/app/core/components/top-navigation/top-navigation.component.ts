import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  public mockCrumbs = [
    {title: 'Infinitum', route: '/'},
    {title: 'Projects', route: '/'},
    {title: 'Mountain Budgets', route: '/'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
