import { TestBed } from '@angular/core/testing';

import { GrosorPeloComparacionService } from './grosor-pelo-comparacion.service';

describe('GrosorPeloComparacionService', () => {
  let service: GrosorPeloComparacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrosorPeloComparacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
