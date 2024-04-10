import { TestBed } from '@angular/core/testing';

import { CatClienteService } from './cat-cliente.service';

describe('CatClienteService', () => {
  let service: CatClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
