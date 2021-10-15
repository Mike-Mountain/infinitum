import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { ContentNavigationComponent } from './components/content-navigation/content-navigation.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { DashButtonModule } from '../../../../../../libs/dash-ui/src/lib/modules/dash-button/dash-button.module';


@NgModule({
  declarations: [
    SideNavigationComponent,
    TopNavigationComponent,
    ContentNavigationComponent,
    BottomNavigationComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    DashButtonModule
  ],
  exports: [
    SideNavigationComponent,
    TopNavigationComponent,
    ContentNavigationComponent,
    BottomNavigationComponent
  ]
})
export class NavigationModule {
}
