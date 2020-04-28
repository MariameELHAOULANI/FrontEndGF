import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanformationComponent } from './planformation.component';

describe('PlanformationComponent', () => {
  let component: PlanformationComponent;
  let fixture: ComponentFixture<PlanformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
