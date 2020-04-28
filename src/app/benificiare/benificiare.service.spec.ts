import { TestBed } from '@angular/core/testing';

import { BenificiareService } from './benificiare.service';

describe('BenificiareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BenificiareService = TestBed.get(BenificiareService);
    expect(service).toBeTruthy();
  });
});
