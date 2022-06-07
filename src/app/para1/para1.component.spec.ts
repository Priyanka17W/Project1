import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Para1Component } from './para1.component';

describe('Para1Component', () => {
  let component: Para1Component;
  let fixture: ComponentFixture<Para1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Para1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Para1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
