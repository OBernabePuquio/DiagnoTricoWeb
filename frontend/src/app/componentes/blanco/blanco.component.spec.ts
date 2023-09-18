import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlancoComponent } from './blanco.component';

describe('BlancoComponent', () => {
  let component: BlancoComponent;
  let fixture: ComponentFixture<BlancoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlancoComponent]
    });
    fixture = TestBed.createComponent(BlancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
