import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoEmpleadoComponent } from './catalogo-empleado/catalogo-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EliminarEmpleadoComponent } from './eliminar-empleado/eliminar-empleado.component';
import { NuevoEmpleadoComponent } from './nuevo-empleado/nuevo-empleado.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CatalogoEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EliminarEmpleadoComponent,
    NuevoEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class EmpleadoModule { }
