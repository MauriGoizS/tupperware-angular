import { TestBed } from '@angular/core/testing';

import { ProductocatalogoService } from './productocatalogo.service';

describe('ProductocatalogoService', () => {
  let service: ProductocatalogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductocatalogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
