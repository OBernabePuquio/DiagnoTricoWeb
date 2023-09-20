import { TestBed } from '@angular/core/testing';

import { PuntosAmarillosService } from './puntos-amarillos.service';

describe('PuntosAmarillosService', () => {
  let service: PuntosAmarillosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntosAmarillosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
