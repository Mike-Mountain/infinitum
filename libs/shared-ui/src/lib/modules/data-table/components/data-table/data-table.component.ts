import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TableConfig } from '@infinitum/shared-ui';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'inf-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent<T = any> implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) matPaginator: MatPaginator | undefined;
  @ViewChild(MatSort) matSort: MatSort | undefined;

  @Output() rowAction: EventEmitter<{ action: string, row: T }> = new EventEmitter<{ action: string, row: T }>();
  @Output() tableAction: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  public tableDataSource = new MatTableDataSource<T>([]);
  public displayColumns: string[] = [];
  private _config: TableConfig<T> | undefined;

  @Input() set config(config: TableConfig<T> | undefined) {
    if (config) {
      this._config = config;
      this.displayColumns = [
        'id',
        'name',
        'lived',
        'location',
        'diet',
        'type'
      ];
      this.setTableDataSource(config.data, config.defaultPageSize);
    }
  };

  get config(): TableConfig<T> | undefined {
    return this._config;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.matPaginator) {
      this.tableDataSource.paginator = this.matPaginator;
    }
  }

  public setTableDataSource(data: T[], pageSize: number) {
    data = data.filter((item, index) => index <= pageSize);
    this.tableDataSource = new MatTableDataSource<T>(data);
    if (this.matSort) {
      this.tableDataSource.sort = this.matSort;
    }
    if (this.matPaginator) {
      this.tableDataSource.paginator = this.matPaginator;
    }
  }

  public emitRowAction(row: T, action: string) {
    this.rowAction.emit({ action, row });
  }

  public emitTableAction(action: PageEvent) {
    this.tableAction.emit(action);
  }

  public log(m: any) {
    console.log(m);
  }

}
