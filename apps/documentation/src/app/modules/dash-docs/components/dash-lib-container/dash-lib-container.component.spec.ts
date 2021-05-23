import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashLibContainerComponent } from './dash-lib-container.component';

describe('DashLibContainerComponent', () => {
  let component: DashLibContainerComponent;
  let fixture: ComponentFixture<DashLibContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashLibContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashLibContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
