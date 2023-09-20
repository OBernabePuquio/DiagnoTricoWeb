import { TestBed } from '@angular/core/testing';

import { ProporcionFrontalVsOccipitalService } from './proporcion-frontal-vs-occipital.service';

describe('ProporcionFrontalVsOccipitalService', () => {
  let service: ProporcionFrontalVsOccipitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProporcionFrontalVsOccipitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
