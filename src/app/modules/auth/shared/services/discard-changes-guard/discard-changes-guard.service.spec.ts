import { TestBed } from '@angular/core/testing';

import { DiscardChangesGuardService } from './discard-changes-guard.service';

describe('DiscardChangesGuardService', () => {
  let service: DiscardChangesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscardChangesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
