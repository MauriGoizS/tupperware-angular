import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarComponentProveedor } from './eliminar.component';

describe('EliminarComponent', () => {
  let component: EliminarComponentProveedor;
  let fixture: ComponentFixture<EliminarComponentProveedor>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarComponentProveedor]
    });
    fixture = TestBed.createComponent(EliminarComponentProveedor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
