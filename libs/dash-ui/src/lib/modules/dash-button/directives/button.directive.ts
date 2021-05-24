import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ButtonColor, ButtonType } from '../models/dash-button.model';

@Directive({
  selector: '[dash-button]'
})
export class ButtonDirective implements OnInit {

  @Input() private color: ButtonColor = 'primary';
  @Input() private buttonType: ButtonType = 'basic';
  @Input() private disabled = false;
  @Input() private size: 'sm' | 'xl' | undefined;
  @Input() private class = '';

  private readonly element: HTMLButtonElement | HTMLAnchorElement;
  private classList: string[] = [];

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    this.element = this.el.nativeElement;
  }

  ngOnInit(): void {
    this.classList = [
      `dash-${this.buttonType}-button`,
      `button-${this.color}`,
      this.size && `button-${this.size}`
    ];
    this.setBaseStyles();
  }

  private setBaseStyles() {
    this.classList.forEach(item => this.renderer.addClass(this.element, item));
  }

}
