export interface TableColumn {
  name: string;
  dataKey: string;
  position?: 'right' | 'left';
  sortable?: boolean;
}

export interface TableRowAction {
  action: string;
  icon: string;
}

export interface TableConfig<T> {
  pageable?: boolean;
  sortable?: boolean;
  filterable?:boolean;
  columns: TableColumn[];
  rowActions: TableRowAction[];
  pageSizeOptions: number[];
  defaultPageSize: number;
  data: T[];
}
