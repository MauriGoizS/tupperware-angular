import { TestBed } from '@angular/core/testing';

import { NewDepartamentoService } from './new-departamento.service';

describe('NewDepartamentoService', () => {
  let service: NewDepartamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewDepartamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
