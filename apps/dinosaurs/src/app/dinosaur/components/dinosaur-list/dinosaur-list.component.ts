import { Component, OnInit } from '@angular/core';
import { DinosaurService } from '../../store/dinosaur.service';
import { DinosaurQuery } from '../../store/dinosaur.query';
import { Observable } from 'rxjs';
import { Dinosaur } from '../../store/dinosaur.model';
import { TableColumn, TableConfig } from '@infinitum/shared-ui';

@Component({
  selector: 'dino-dinosaur-list',
  templateUrl: './dinosaur-list.component.html',
  styleUrls: ['./dinosaur-list.component.scss']
})
export class DinosaurListComponent implements OnInit {

  public tableConfig: TableConfig<Dinosaur> | undefined;
  private columns: TableColumn[] = [];
  public dinos$: any;

  constructor(private dinosaurService: DinosaurService,
              private dinosaurQuery: DinosaurQuery) {
  }

  ngOnInit(): void {
    if (this.dinosaurQuery.getHasCache()) {
      this.dinos$ = this.dinosaurQuery.selectAll();
      this.dinosaurQuery.selectAll().subscribe(dinos => {
        this.setTableConfig(dinos);
      });
    } else {
      this.dinos$ = this.dinosaurService.getAllDinos();
      this.dinosaurService.getAllDinos().subscribe(dinos => {
        this.setTableConfig(dinos);
      });
    }
  }

  setTableConfig(data: Dinosaur[]) {
    Object.keys(data[0]).forEach(key => {
      this.columns.push({
        name: key,
        dataKey: key,
        sortable: true
      });
    });
    this.tableConfig = {
      columns: this.columns,
      data,
      pageSizeOptions: [5, 10, 15],
      defaultPageSize: 5,
      pageable: true,
      filterable: true,
      sortable: true,
      rowActions: [
        { action: 'details', icon: 'visibility' },
        { action: 'filter', icon: 'filter_list'}
      ]
    };
  }

  log(m: any) {
    console.log(m);
  }

}
