import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalogo } from '../modelo/catalogoprod.modelo';
import { Observable , of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router'; // Importa Router

@Injectable({
  providedIn: 'root'
})
export class ProductocatalogoService {

  private apiUrl = 'http://127.0.0.1:4000';

  constructor(private http:HttpClient) { }

  obtenercatproducto(){
    return this.http.get<Catalogo[]>(`${this.apiUrl}/productos/get_all`)
  }

  eliminar_prod(id:string | null){
    const url = `${this.apiUrl}/productos/eliminar/${id}`;
    return this.http.delete<any>(url)
  }

  obtenerPorId(id: string): Observable<Catalogo> {
    const url = `${this.apiUrl}/productos/porID/${id}`;
    return this.http.get<Catalogo>(url);
  }

  actualizarProducto(id: string, producto: Partial<Catalogo>): Observable<any> {
    const url = `${this.apiUrl}/productos/actualizar/${id}`;
    const headers = { 'Content-Type': 'application/json' };

    return this.http.put<any>(url, producto, { headers })
      .pipe(tap((res: any) => {
          console.log("Servicio de actualización:", res.message);
        }),
        catchError(err => of(err.error.message))
      );
  }

  obtenerPorNombre(nombre:string): Observable<Catalogo> {
    const url =  `${this.apiUrl}/productos/porNombre/${nombre}`;
    return this.http.get<Catalogo>(url); // Asegúrate de que estás devolviendo un Observable<catalogob>
  }
}


