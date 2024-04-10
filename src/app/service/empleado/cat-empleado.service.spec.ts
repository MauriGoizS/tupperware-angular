import { TestBed } from '@angular/core/testing';

import { CatEmpleadoService } from './cat-empleado.service';

describe('CatEmpleadoService', () => {
  let service: CatEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
