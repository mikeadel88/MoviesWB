import { TestBed } from '@angular/core/testing';

import { GuradGuard } from './gurad.guard';

describe('GuradGuard', () => {
  let guard: GuradGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuradGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
