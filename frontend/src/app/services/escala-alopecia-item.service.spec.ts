import { TestBed } from '@angular/core/testing';

import { EscalaAlopeciaItemService } from './escala-alopecia-item.service';

describe('EscalaAlopeciaItemService', () => {
  let service: EscalaAlopeciaItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscalaAlopeciaItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
