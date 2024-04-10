import { TestBed } from '@angular/core/testing';

import { NewClienteService } from './new-cliente.service';

describe('NewClienteService', () => {
  let service: NewClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
