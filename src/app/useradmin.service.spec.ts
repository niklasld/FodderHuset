import { TestBed } from '@angular/core/testing';

import { UseradminService } from './useradmin.service';

describe('UseradminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseradminService = TestBed.get(UseradminService);
    expect(service).toBeTruthy();
  });
});
