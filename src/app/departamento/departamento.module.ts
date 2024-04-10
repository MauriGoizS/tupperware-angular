import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarDepartamentoComponent } from './actualizar-departamento/actualizar-departamento.component';
import { CatologoDepartamentoComponent } from './catologo-departamento/catologo-departamento.component';
import { EliminarDepartamentoComponent } from './eliminar-departamento/eliminar-departamento.component';
import { NuevoDepartamentoComponent } from './nuevo-departamento/nuevo-departamento.component';



@NgModule({
  declarations: [
    ActualizarDepartamentoComponent,
    CatologoDepartamentoComponent,
    EliminarDepartamentoComponent,
    NuevoDepartamentoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DepartamentoModule { }
