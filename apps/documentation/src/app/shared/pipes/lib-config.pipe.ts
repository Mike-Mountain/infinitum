import { Pipe, PipeTransform } from '@angular/core';

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
    switch (true) {
      case fragment.includes('/dash-lib'):
        return 'Dashboard Library';
      case fragment.includes('/shared-ui-lib'):
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
