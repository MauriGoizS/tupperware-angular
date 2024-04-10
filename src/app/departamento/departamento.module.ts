import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarDepartamentoComponent } from './actualizar-departamento/actualizar-departamento.component';
import { CatologoDepartamentoComponent } from './catologo-departamento/catologo-departamento.component';
import { EliminarDepartamentoComponent } from './eliminar-departamento/eliminar-departamento.component';
import { NuevoDepartamentoComponent } from './nuevo-departamento/nuevo-departamento.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ActualizarDepartamentoComponent,
    CatologoDepartamentoComponent,
    EliminarDepartamentoComponent,
    NuevoDepartamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class DepartamentoModule { }
