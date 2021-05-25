import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { SharedModule } from '../shared/shared.module';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TopNavigationComponent,
    SideNavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutComponent
  ]
})
export class CoreModule {
}
