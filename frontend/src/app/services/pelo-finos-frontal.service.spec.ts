import { TestBed } from '@angular/core/testing';

import { PeloFinosFrontalService } from './pelo-finos-frontal.service';

describe('PeloFinosFrontalService', () => {
  let service: PeloFinosFrontalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeloFinosFrontalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
