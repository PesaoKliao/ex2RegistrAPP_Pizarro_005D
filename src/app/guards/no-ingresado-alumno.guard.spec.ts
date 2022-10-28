import { TestBed } from '@angular/core/testing';

import { NoIngresadoAlumnoGuard } from './no-ingresado-alumno.guard';

describe('NoIngresadoAlumnoGuard', () => {
  let guard: NoIngresadoAlumnoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoIngresadoAlumnoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
