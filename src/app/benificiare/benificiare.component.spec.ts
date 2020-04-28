import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenificiareComponent } from './benificiare.component';

describe('BenificiareComponent', () => {
  let component: BenificiareComponent;
  let fixture: ComponentFixture<BenificiareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenificiareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenificiareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
