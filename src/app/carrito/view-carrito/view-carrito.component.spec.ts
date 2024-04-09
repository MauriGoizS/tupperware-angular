import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarritoComponent } from './view-carrito.component';

describe('ViewCarritoComponent', () => {
  let component: ViewCarritoComponent;
  let fixture: ComponentFixture<ViewCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCarritoComponent]
    });
    fixture = TestBed.createComponent(ViewCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
