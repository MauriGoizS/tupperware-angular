import { TestBed } from '@angular/core/testing';

import { CatmarcaService } from './catmarca.service';

describe('CatmarcaService', () => {
  let service: CatmarcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatmarcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
