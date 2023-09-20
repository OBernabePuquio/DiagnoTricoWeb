import { TestBed } from '@angular/core/testing';

import { DecoloracionPielService } from './decoloracion-piel.service';

describe('DecoloracionPielService', () => {
  let service: DecoloracionPielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecoloracionPielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
