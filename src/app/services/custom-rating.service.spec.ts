import { TestBed } from '@angular/core/testing';

import { CustomRatingService } from './custom-rating.service';

describe('CustomRatingService', () => {
  let service: CustomRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
