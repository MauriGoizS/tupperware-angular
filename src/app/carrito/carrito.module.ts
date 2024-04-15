import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarCarritoComponent } from './buscar-carrito/buscar-carrito.component';
import { ViewCarritoComponent } from './view-carrito/view-carrito.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogoCarritoComponent } from './catalogo-carrito/catalogo-carrito.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EliminarCarritoComponent } from './eliminar-carrito/eliminar-carrito.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    BuscarCarritoComponent,
    ViewCarritoComponent,
    CatalogoCarritoComponent,
    EliminarCarritoComponent,
  ]
})
export class CarritoModule { }
