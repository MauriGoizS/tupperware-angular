import { TestBed } from '@angular/core/testing';

import { ProductopornombreService } from './productopornombre.service';

describe('ProductopornombreService', () => {
  let service: ProductopornombreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductopornombreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
