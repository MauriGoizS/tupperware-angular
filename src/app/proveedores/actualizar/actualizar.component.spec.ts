import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarComponentProveedor } from './actualizar.component';

describe('ActualizarComponent', () => {
  let component: ActualizarComponentProveedor;
  let fixture: ComponentFixture<ActualizarComponentProveedor>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarComponentProveedor]
    });
    fixture = TestBed.createComponent(ActualizarComponentProveedor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
