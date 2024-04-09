import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catalogo } from '../modelo/catalogoprod.modelo';
import { Observable , of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router'; // Importa Router

@Injectable({
  providedIn: 'root'
})
export class ProductocatalogoService {

  constructor(private http:HttpClient) { }

  obtenercatproducto(){
    return this.http.get<catalogo[]>('http://127.0.0.1:4000/productos/get_all')
  }

  eliminar_prod(id:string | null){
    const apiUrl='http://127.0.0.1:4000'
    const url = `${apiUrl}/productos/eliminar/${id}`;
    return this.http.delete<any>(url)
  }

  obtenerPorId(id: string): Observable<catalogo> {
    const apiUrl = 'http://127.0.0.1:4000';
    const url = `${apiUrl}/productos/porID/${id}`;
    return this.http.get<catalogo>(url);
  }

  actualizarProducto(id: string, producto: Partial<catalogo>): Observable<any> {
    const apiUrl = 'http://127.0.0.1:4000';
    const url = `${apiUrl}/productos/actualizar/${id}`;
    const headers = { 'Content-Type': 'application/json' };
  
    return this.http.put<any>(url, producto, { headers })
      .pipe(tap((res: any) => {
          console.log("Servicio de actualización:", res.message);
        }),
        catchError(err => of(err.error.message))
      );
  }

  obtenerPorNombre(nombre:string): Observable<catalogo> {
    const apiUrl= 'http://127.0.0.1:4000';
    const url =  `${apiUrl}/productos/porNombre/${nombre}`;
    return this.http.get<catalogo>(url); // Asegúrate de que estás devolviendo un Observable<catalogob>
  }
}


