import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCarritoComponent } from './catalogo-carrito.component';

describe('CatalogoCarritoComponent', () => {
  let component: CatalogoCarritoComponent;
  let fixture: ComponentFixture<CatalogoCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogoCarritoComponent]
    });
    fixture = TestBed.createComponent(CatalogoCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
