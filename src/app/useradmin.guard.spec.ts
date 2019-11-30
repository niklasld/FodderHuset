import { TestBed, async, inject } from '@angular/core/testing';

import { UseradminGuard } from './useradmin.guard';

describe('UseradminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UseradminGuard]
    });
  });

  it('should ...', inject([UseradminGuard], (guard: UseradminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
