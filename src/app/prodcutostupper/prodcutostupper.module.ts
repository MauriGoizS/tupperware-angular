import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { BuscarProductosComponent } from './buscar-productos/buscar-productos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { CardComponent } from '../commons/components/card/card.component';


@NgModule({
  declarations: [
    CatalogoProductosComponent,
    NuevoProductoComponent,
    BuscarProductosComponent,
    ActualizarComponent,
    VerProductoComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ProductostupperModule { }
