import { TestBed } from '@angular/core/testing';

import { PrevjobsService } from './prevjobs.service';

describe('PrevjobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrevjobsService = TestBed.get(PrevjobsService);
    expect(service).toBeTruthy();
  });
});
