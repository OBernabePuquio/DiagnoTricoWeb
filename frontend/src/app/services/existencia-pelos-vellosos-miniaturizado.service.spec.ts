import { TestBed } from '@angular/core/testing';

import { ExistenciaPelosVellososMiniaturizadoService } from './existencia-pelos-vellosos-miniaturizado.service';

describe('ExistenciaPelosVellososMiniaturizadoService', () => {
  let service: ExistenciaPelosVellososMiniaturizadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExistenciaPelosVellososMiniaturizadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
