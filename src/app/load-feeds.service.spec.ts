import { TestBed } from '@angular/core/testing';

import { LoadFeedsService } from './load-feeds.service';

describe('LoadFeedsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadFeedsService = TestBed.get(LoadFeedsService);
    expect(service).toBeTruthy();
  });
});
