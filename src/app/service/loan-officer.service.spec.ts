import { TestBed, inject } from '@angular/core/testing';

import { LoanOfficerService } from './loan-officer.service';

describe('LoanOfficerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanOfficerService]
    });
  });

  it('should be created', inject([LoanOfficerService], (service: LoanOfficerService) => {
    expect(service).toBeTruthy();
  }));
});
