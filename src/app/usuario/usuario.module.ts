import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoUsuarioComponent } from './catalogo-usuario/catalogo-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CatalogoUsuarioComponent,
    EliminarUsuarioComponent,
    ActualizarUsuarioComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UsuarioModule { }
