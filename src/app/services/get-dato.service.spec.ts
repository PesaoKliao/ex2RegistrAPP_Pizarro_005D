import { TestBed } from '@angular/core/testing';

import { GetDatoService } from './get-dato.service';

describe('GetDatoService', () => {
  let service: GetDatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
