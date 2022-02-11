import { TestBed } from '@angular/core/testing';

import { SignUpValidatorService } from './sign-up-validator.service';

describe('SignUpValidatorService', () => {
  let service: SignUpValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
