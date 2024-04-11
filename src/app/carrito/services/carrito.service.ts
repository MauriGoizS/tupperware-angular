import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CarritoModelo, Producto } from '../../modelo/carrito.modelo';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private _carrito: CarritoModelo | null = null;

  private apiUrl = 'http://127.0.0.1:4000';

  private http = inject(HttpClient);

  get carrito(): CarritoModelo | null {
    const carritoString = localStorage.getItem('carrito');
    this._carrito = carritoString ? JSON.parse(carritoString) : null;
    return this._carrito;
  }

  agregarProductoAlCarrito(producto: Producto): void {
    const posProducto = this.existeElProductoEnElCarrito(producto);

    if (posProducto !== undefined) {
      this._carrito!.productos[posProducto].cantidad = producto.cantidad;
      localStorage.setItem('carrito', JSON.stringify(this._carrito));
      return;
    }

    if (this.carrito === null) {
      this._carrito = {
        productos: [producto],
      };
      localStorage.setItem('carrito', JSON.stringify(this._carrito));
    } else {
      this._carrito?.productos.push(producto);
      localStorage.setItem('carrito', JSON.stringify(this._carrito));
    }
  }

  existeElProductoEnElCarrito(verificarProducto: Producto): number | undefined {
    let posEncontrada: number | undefined = undefined;
    this._carrito?.productos.forEach((producto, index) => {
      if (producto._id === verificarProducto._id) {
        posEncontrada = index
      }
    });
    return posEncontrada;
  }

  eliminarCarrito(): void {
    this._carrito = null;
    localStorage.removeItem('carrito');
  }

  eliminarProductoDelCarrito(idProducto: string): void {
    this._carrito!.productos = this._carrito?.productos.filter(prod => prod._id !== idProducto) || [];
    localStorage.removeItem('carrito');
    if (this._carrito?.productos?.length === 0) {
      this._carrito = null
    }
    localStorage.setItem('carrito', JSON.stringify(this._carrito));
  }


  // HTTP requests

  obtenerCarritoPorId(idCarrito: string) {
    return this.http.get<CarritoModelo>(`${this.apiUrl}/carrito/${idCarrito}`);
  }

  realizarPedido() {
    return this.http.post<CarritoModelo>(`${this.apiUrl}/carrito/nuevo`, this._carrito);
  }
}
