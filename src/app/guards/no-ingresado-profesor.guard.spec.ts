import { TestBed } from '@angular/core/testing';

import { NoIngresadoProfesorGuard } from './no-ingresado-profesor.guard';

describe('NoIngresadoProfesorGuard', () => {
  let guard: NoIngresadoProfesorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoIngresadoProfesorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
