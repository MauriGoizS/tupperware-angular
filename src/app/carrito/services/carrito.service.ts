import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CarritoModelo } from '../../modelo/carrito.modelo';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = 'http://127.0.0.1:4000';

  private http = inject(HttpClient);

  obtenerCarritoPorId(idCarrito: string) {
    return this.http.get<CarritoModelo>(`${this.apiUrl}/carrito/${idCarrito}`);
  }

}
