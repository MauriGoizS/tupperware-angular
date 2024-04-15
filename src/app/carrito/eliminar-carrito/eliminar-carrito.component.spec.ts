import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCarritoComponent } from './eliminar-carrito.component';

describe('EliminarCarritoComponent', () => {
  let component: EliminarCarritoComponent;
  let fixture: ComponentFixture<EliminarCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarCarritoComponent]
    });
    fixture = TestBed.createComponent(EliminarCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
