import { TestBed } from '@angular/core/testing';

import { IngresadoAlumnoGuard } from './ingresado-alumno.guard';

describe('IngresadoAlumnoGuard', () => {
  let guard: IngresadoAlumnoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoAlumnoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
