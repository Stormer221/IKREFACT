import { TestBed } from '@angular/core/testing';

import { ContactResolverService } from './contact-resolver.service';

describe('ContactResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactResolverService = TestBed.get(ContactResolverService);
    expect(service).toBeTruthy();
  });
});
