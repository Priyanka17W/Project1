import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Para2Component } from './para2.component';

describe('Para2Component', () => {
  let component: Para2Component;
  let fixture: ComponentFixture<Para2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Para2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Para2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
