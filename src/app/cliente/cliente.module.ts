import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { CatalogoClienteComponent } from './catalogo-cliente/catalogo-cliente.component';
import { EliminarClienteComponent } from './eliminar-cliente/eliminar-cliente.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ActualizarClienteComponent,
    CatalogoClienteComponent,
    EliminarClienteComponent,
    NuevoClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ClienteModule { }
