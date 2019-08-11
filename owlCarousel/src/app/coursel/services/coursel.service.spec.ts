import { TestBed } from '@angular/core/testing';

import { CourselService } from './coursel.service';

describe('CourselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourselService = TestBed.get(CourselService);
    expect(service).toBeTruthy();
  });
});
