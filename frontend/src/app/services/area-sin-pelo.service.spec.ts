import { TestBed } from '@angular/core/testing';

import { AreaSinPeloService } from './area-sin-pelo.service';

describe('AreaSinPeloService', () => {
  let service: AreaSinPeloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaSinPeloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
