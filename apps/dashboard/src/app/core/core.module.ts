import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { SharedModule } from '../shared/shared.module';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { FileNavigationComponent } from './components/file-navigation/file-navigation.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { ContentNavigationComponent } from './components/content-navigation/content-navigation.component';
import { AboutComponent } from './components/about/about.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    LayoutComponent,
    TopNavigationComponent,
    SideNavigationComponent,
    FileNavigationComponent,
    BottomNavigationComponent,
    ContentNavigationComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MatInputModule
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
