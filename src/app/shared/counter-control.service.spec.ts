import { TestBed } from '@angular/core/testing';

import { CounterControlService } from './counter-control.service';

describe('CounterControlService', () => {
  let service: CounterControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
