import { TestBed } from '@angular/core/testing';

import { CatprovedorService } from './catprovedor.service';

describe('CatprovedorService', () => {
  let service: CatprovedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatprovedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
