import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevjobsComponent } from './prevjobs.component';

describe('PrevjobsComponent', () => {
  let component: PrevjobsComponent;
  let fixture: ComponentFixture<PrevjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
