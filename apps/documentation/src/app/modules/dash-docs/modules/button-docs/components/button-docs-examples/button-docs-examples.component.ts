import { Component, OnInit } from '@angular/core';
import {
  ButtonColor,
  ButtonType
} from '../../../../../../../../../../libs/dash-ui/src/lib/modules/dash-dash-button/models/dash-dash-button.model';

@Component({
  selector: 'docs-button-docs-examples',
  templateUrl: './button-docs-examples.component.html',
  styleUrls: ['./button-docs-examples.component.scss']
})
export class ButtonDocsExamplesComponent {

  public colors: ButtonColor[] = [
    'primary',
    'accent',
    'warn'
  ];
  public types: ButtonType[] = [
    'basic',
    'icon'
  ];
  public selectedColor: ButtonColor = 'primary';
  public selectedType: ButtonType = 'basic';
  public buttonCode = `<dash-button color='${this.selectedColor}' type='${this.selectedType}'>Test</dash-button>`;

  public updateButton(color: ButtonColor, type: ButtonType): void {
    this.selectedColor = color;
    this.selectedType = type;
    this.buttonCode = `<dash-button color='${this.selectedColor}' type='${this.selectedType}'>Test</dash-button>`;
  }

}
