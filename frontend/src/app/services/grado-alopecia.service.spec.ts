import { TestBed } from '@angular/core/testing';

import { GradoAlopeciaService } from './grado-alopecia.service';

describe('GradoAlopeciaService', () => {
  let service: GradoAlopeciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradoAlopeciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
