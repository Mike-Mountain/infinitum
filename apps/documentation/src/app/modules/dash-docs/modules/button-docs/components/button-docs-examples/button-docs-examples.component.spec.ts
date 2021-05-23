import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDocsExamplesComponent } from './button-docs-examples.component';

describe('ButtonDocsExamplesComponent', () => {
  let component: ButtonDocsExamplesComponent;
  let fixture: ComponentFixture<ButtonDocsExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDocsExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDocsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
