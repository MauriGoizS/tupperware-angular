import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoProveedoresComponent } from './catalogo-proveedores/catalogo-proveedores.component';
import { BuscarProveedorComponent } from './buscar-proveedor/buscar-proveedor.component';
import { NuevoProveedorComponent } from './nuevo-proveedor/nuevo-proveedor.component';
import { FormsModule } from '@angular/forms';
import { EliminarComponentProveedor } from './eliminar/eliminar.component';
import { ActualizarComponentProveedor } from './actualizar/actualizar.component';
import { Route, Router, RouterModule } from '@angular/router';  
import { ProductostupperModule } from '../prodcutostupper/prodcutostupper.module';

@NgModule({
  declarations: [
    CatalogoProveedoresComponent,
    BuscarProveedorComponent,
    NuevoProveedorComponent,
    EliminarComponentProveedor,
    ActualizarComponentProveedor
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
    
    
  ]
})
export class ProveedoresModule { }
