import { TestBed } from '@angular/core/testing';

import { NewMarcaService } from './new-marca.service';

describe('NewMarcaService', () => {
  let service: NewMarcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewMarcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
