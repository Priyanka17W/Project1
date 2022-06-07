import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGCPar2Component } from './ng-g-c-par2.component';

describe('NgGCPar2Component', () => {
  let component: NgGCPar2Component;
  let fixture: ComponentFixture<NgGCPar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgGCPar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGCPar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
