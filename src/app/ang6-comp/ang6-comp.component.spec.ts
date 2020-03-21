import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ang6CompComponent } from './ang6-comp.component';

describe('Ang6CompComponent', () => {
  let component: Ang6CompComponent;
  let fixture: ComponentFixture<Ang6CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ang6CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ang6CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
