import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLoComponent } from './header-lo.component';

describe('HeaderLoComponent', () => {
  let component: HeaderLoComponent;
  let fixture: ComponentFixture<HeaderLoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
