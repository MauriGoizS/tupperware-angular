import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatologoDepartamentoComponent } from './catologo-departamento.component';

describe('CatologoDepartamentoComponent', () => {
  let component: CatologoDepartamentoComponent;
  let fixture: ComponentFixture<CatologoDepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatologoDepartamentoComponent]
    });
    fixture = TestBed.createComponent(CatologoDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
