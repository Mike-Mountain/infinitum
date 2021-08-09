import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { RowActionPipe } from './pipes/row-action.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    DataTableComponent,
    RowActionPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule {
}
