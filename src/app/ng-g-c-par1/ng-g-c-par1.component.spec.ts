import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGCPar1Component } from './ng-g-c-par1.component';

describe('NgGCPar1Component', () => {
  let component: NgGCPar1Component;
  let fixture: ComponentFixture<NgGCPar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgGCPar1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGCPar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
