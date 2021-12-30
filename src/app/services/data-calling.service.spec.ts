import { TestBed } from '@angular/core/testing';

import { DataCallingService } from './data-calling.service';

describe('DataCallingService', () => {
  let service: DataCallingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCallingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
