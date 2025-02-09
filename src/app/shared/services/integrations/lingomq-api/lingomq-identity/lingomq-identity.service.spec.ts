import { TestBed } from '@angular/core/testing';

import { LingomqIdentityService } from './lingomq-identity.service';

describe('LingomqIdentityService', () => {
  let service: LingomqIdentityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LingomqIdentityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
