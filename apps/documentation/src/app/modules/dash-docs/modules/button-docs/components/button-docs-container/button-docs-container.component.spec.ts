import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDocsContainerComponent } from './button-docs-container.component';

describe('ButtonDocsContainerComponent', () => {
  let component: ButtonDocsContainerComponent;
  let fixture: ComponentFixture<ButtonDocsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDocsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDocsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
