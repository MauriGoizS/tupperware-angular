import { TestBed } from '@angular/core/testing';

import { NewProveedorService } from './new-proveedor.service';

describe('NewProveedorService', () => {
  let service: NewProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
