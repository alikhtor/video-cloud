import { TestBed } from '@angular/core/testing';

import { RecomendedShowService } from './recomended-show.service';

describe('RecomendedShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecomendedShowService = TestBed.get(RecomendedShowService);
    expect(service).toBeTruthy();
  });
});
