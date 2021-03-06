import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';


@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTreeModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatTreeModule
  ]
})
export class MaterialModule {
}
