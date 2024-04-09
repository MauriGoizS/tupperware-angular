import { TestBed } from '@angular/core/testing';

import { CatUsuarioService } from './cat-usuario.service';

describe('CatUsuarioService', () => {
  let service: CatUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
