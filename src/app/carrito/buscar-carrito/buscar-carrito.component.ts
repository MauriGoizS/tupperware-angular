import { CarritoModelo } from './../../modelo/carrito.modelo';
import { Component, inject } from '@angular/core';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-buscar-carrito',
  templateUrl: './buscar-carrito.component.html',
  styleUrls: ['./buscar-carrito.component.css'],
})
export class BuscarCarritoComponent {

  private readonly carritoService = inject(CarritoService);

  public buscando = false;
  public error = false;
  public id: string = '';
  public carrito: CarritoModelo | null = null;

  buscarCarritoPorId(carritoId: string): void {
    if (carritoId) {
      this.id = carritoId;
      this.buscando = true;
      this.error = false;
      this.carritoService.obtenerCarritoPorId(carritoId).subscribe({
        next: res => {
          this.carrito = res;
          console.log(this.carrito);
          this.buscando = false;
        },
        error: error => {
          console.log('error', error);
          this.buscando = false;
          this.error = true;
        }
      });
    }
  }

  get total(): number {
    return this.carrito?.productos.reduce((total, producto) => {
      return total + (producto.precio * producto.cantidad);
    }, 0) || 0;
  }
}
