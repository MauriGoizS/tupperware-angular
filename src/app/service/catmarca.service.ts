import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


import { HttpClient } from '@angular/common/http';  

import { catmarca } from '../modelo/catmarca';

@Injectable({
  providedIn: 'root'
})
export class CatmarcaService {

  constructor(private http: HttpClient) { }

  obtenercat_marca(){
    return this.http.get<catmarca[]>('http://127.0.0.1:4000/marca/get_all')
  }
  
  eliminar_marca(id:string | null){
    const apiUrl='http://127.0.0.1:4000'
    const url = `${apiUrl}/marca/eliminar/${id}`;
    return this.http.delete<any>(url)
    }


  obtenerPorId(id: string): Observable<catmarca> {
    const apiUrl = 'http://127.0.0.1:4000';
    const url = `${apiUrl}/marca/porID/${id}`;
    return this.http.get<catmarca>(url);
  }


  
  actualizarProducto(id: string, producto: Partial<catmarca>): Observable<any> {
    const apiUrl = 'http://127.0.0.1:4000';
    const url = `${apiUrl}/marca/actualizar/${id}`;
    const headers = { 'Content-Type': 'application/json' };
  
    return this.http.put<any>(url, producto, { headers })
      .pipe(tap((res: any) => {
          console.log("Servicio de actualización:", res.message);
        }),
        catchError(err => of(err.error.message))
      );
  }

  

  obtenerPorNombre(nombre:string): Observable<catmarca> {
    const apiUrl= 'http://127.0.0.1:4000';
    const url =  `${apiUrl}/marca/porNombre/${nombre}`;
    return this.http.get<catmarca>(url); // Asegúrate de que estás devolviendo un Observable<catalogob>
  }

}
