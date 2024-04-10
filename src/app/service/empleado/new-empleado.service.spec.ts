import { TestBed } from '@angular/core/testing';

import { NewEmpleadoService } from './new-empleado.service';

describe('NewEmpleadoService', () => {
  let service: NewEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
