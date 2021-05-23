import { Pipe, PipeTransform } from '@angular/core';
import { RouteModel } from '../models/utils.models/route.model';

@Pipe({
  name: 'libConfig'
})
export class LibConfigPipe implements PipeTransform {

  transform(value: string, kind: string): string {
    return kind === 'title' ?
      this.getTitle(value) :
      this.getFragment(value);
  }

  private getTitle(fragment: string): string {
    switch (fragment) {
      case '/dash-lib':
        return 'Dashboard Library';
      case '/shared-ui-lib':
        return 'Shared UI Library';
      default:
        return '';
    }
  }

  private getFragment(title: string): string {
    switch (title) {
      case 'Dashboard Library':
        return '/dash-lib';
      case 'Shared UI Library':
        return '/shared-ui-lib';
      default:
        return '';
    }
  }

}
