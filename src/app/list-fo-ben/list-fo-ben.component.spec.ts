import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFoBenComponent } from './list-fo-ben.component';

describe('ListFoBenComponent', () => {
  let component: ListFoBenComponent;
  let fixture: ComponentFixture<ListFoBenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFoBenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFoBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
