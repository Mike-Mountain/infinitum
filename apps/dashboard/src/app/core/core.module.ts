import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FileNavigationComponent } from './components/file-navigation/file-navigation.component';
import { AboutComponent } from './components/about/about.component';
import { MatInputModule } from '@angular/material/input';
import { NavigationModule } from '../modules/navigation/navigation.module';


@NgModule({
  declarations: [
    LayoutComponent,
    FileNavigationComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NavigationModule,
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
