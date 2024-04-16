import { Component } from '@angular/core';
import { CarritoModelo } from 'src/app/modelo/carrito.modelo';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-catalogo-carrito',
  templateUrl: './catalogo-carrito.component.html',
  styleUrls: ['./catalogo-carrito.component.css'],
})
export class CatalogoCarritoComponent {
  listaCatalogoCarrito: CarritoModelo[] = [];

  constructor(private catalagoCarrito: CarritoService) {}

  ngOnInit(): void {
    this.obtenerListadoCarrito();
  }

  obtenerListadoCarrito() {
    this.catalagoCarrito
      .obtenerCatalogoCarrito()

      .subscribe((data) => {
        console.log(data);
        this.listaCatalogoCarrito = data;
      });
  }

  borrarCarrito(id: string | undefined) {
    this.catalagoCarrito.eliminar_carrito(id).subscribe(respuesta => {
      console.log(respuesta);
      this.obtenerListadoCarrito();
    });
  };
}
