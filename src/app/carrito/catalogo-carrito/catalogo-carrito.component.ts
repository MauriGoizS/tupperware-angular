import { Component } from '@angular/core';
import { CarritoModelo } from 'src/app/modelo/carrito.modelo';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-catalogo-carrito',
  templateUrl: './catalogo-carrito.component.html',
  styleUrls: ['./catalogo-carrito.component.css']
})
export class CatalogoCarritoComponent {
listaCatalogoCarrito: CarritoModelo[]=[]
  constructor(private catalagoCarrito: CarritoService){}

  ngOnInit(): void{
    this.catalagoCarrito.obtenerCatalogoCarrito()

    .subscribe(data =>{
      console.log(data);
      this.listaCatalogoCarrito=data;
    });
  }
}
