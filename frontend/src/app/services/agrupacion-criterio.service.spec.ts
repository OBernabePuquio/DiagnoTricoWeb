import { TestBed } from '@angular/core/testing';

import { AgrupacionCriterioService } from './agrupacion-criterio.service';

describe('AgrupacionCriterioService', () => {
  let service: AgrupacionCriterioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgrupacionCriterioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
