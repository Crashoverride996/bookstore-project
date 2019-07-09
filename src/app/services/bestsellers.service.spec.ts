import { TestBed } from '@angular/core/testing';

import { BestsellersService } from './bestsellers.service';

describe('BestsellersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestsellersService = TestBed.get(BestsellersService);
    expect(service).toBeTruthy();
  });
});
