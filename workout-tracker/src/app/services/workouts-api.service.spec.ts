import { TestBed } from '@angular/core/testing';

import { WorkoutsAPIService } from './workouts-api.service';

describe('WorkoutsAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutsAPIService = TestBed.get(WorkoutsAPIService);
    expect(service).toBeTruthy();
  });
});
