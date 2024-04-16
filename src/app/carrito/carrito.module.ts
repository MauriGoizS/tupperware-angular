import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarCarritoComponent } from './buscar-carrito/buscar-carrito.component';
import { ViewCarritoComponent } from './view-carrito/view-carrito.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogoCarritoComponent } from './catalogo-carrito/catalogo-carrito.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



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
    CatalogoCarritoComponent
  ]
})
export class CarritoModule { }
