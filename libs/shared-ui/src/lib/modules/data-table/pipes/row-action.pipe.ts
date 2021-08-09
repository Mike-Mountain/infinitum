import { Pipe, PipeTransform } from '@angular/core';
import { TableRowAction } from '@infinitum/shared-ui';

@Pipe({
  name: 'rowAction'
})
export class RowActionPipe implements PipeTransform {

  transform(value: TableRowAction[], action: string): string {
    console.log(value);
    console.log(action);
    return value.filter(item => item.action === action)[0].action;
  }

}
