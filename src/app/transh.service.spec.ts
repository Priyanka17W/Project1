import { TestBed } from '@angular/core/testing';

import { TranshService } from './transh.service';

describe('TranshService', () => {
  let service: TranshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
