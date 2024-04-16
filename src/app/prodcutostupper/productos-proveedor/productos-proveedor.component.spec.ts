import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosProveedorComponent } from './productos-proveedor.component';

describe('ProductosProveedorComponent', () => {
  let component: ProductosProveedorComponent;
  let fixture: ComponentFixture<ProductosProveedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosProveedorComponent]
    });
    fixture = TestBed.createComponent(ProductosProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
