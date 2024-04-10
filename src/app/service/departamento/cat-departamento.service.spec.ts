import { TestBed } from '@angular/core/testing';

import { CatDepartamentoService } from './cat-departamento.service';

describe('CatDepartamentoService', () => {
  let service: CatDepartamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatDepartamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
