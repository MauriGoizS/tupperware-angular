import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarCarritoComponent } from './buscar-carrito/buscar-carrito.component';
import { ViewCarritoComponent } from './view-carrito/view-carrito.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BuscarCarritoComponent,
    ViewCarritoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CarritoModule { }
