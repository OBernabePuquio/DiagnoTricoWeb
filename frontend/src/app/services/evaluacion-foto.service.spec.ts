import { TestBed } from '@angular/core/testing';

import { EvaluacionFotoService } from './evaluacion-foto.service';

describe('EvaluacionFotoService', () => {
  let service: EvaluacionFotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluacionFotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
