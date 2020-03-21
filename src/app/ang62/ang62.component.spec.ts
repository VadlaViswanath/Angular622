import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ang62Component } from './ang62.component';

describe('Ang62Component', () => {
  let component: Ang62Component;
  let fixture: ComponentFixture<Ang62Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ang62Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ang62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
