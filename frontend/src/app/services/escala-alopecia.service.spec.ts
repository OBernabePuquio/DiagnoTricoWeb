import { TestBed } from '@angular/core/testing';

import { EscalaAlopeciaService } from './escala-alopecia.service';

describe('EscalaAlopeciaService', () => {
  let service: EscalaAlopeciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscalaAlopeciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
