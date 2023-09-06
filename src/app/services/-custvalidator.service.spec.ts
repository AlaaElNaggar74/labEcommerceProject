import { TestBed } from '@angular/core/testing';

import { CustvalidatorService } from './-custvalidator.service';

describe('CustvalidatorService', () => {
  let service: CustvalidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustvalidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
