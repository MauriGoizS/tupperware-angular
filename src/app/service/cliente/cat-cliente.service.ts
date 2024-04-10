import { Injectable } from '@angular/core';
import { catcliente } from 'src/app/modelo/catcliente';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatClienteService {

  constructor(private http:HttpClient) { }

  obtenercat_cliente(){
    return this.http.get<catcliente[]>('http://127.0.0.1:4000/cliente/get_all')

  }

  eliminar_cliente(id:string | null){
    const apiUrl='http://127.0.0.1:4000'
    const url = `${apiUrl}/cliente/eliminar/${id}`;
    return this.http.delete<any>(url)
    }

    obtenerPorId(id: string): Observable<catcliente> {
      const apiUrl = 'http://127.0.0.1:4000';
      const url = `${apiUrl}/cliente/porID/${id}`;
      return this.http.get<catcliente>(url);
    }

  actualizarcliente(id: string, producto: Partial<catcliente>): Observable<any> {
    const apiUrl = 'http://127.0.0.1:4000';
    const url = `${apiUrl}/cliente/actualizar/${id}`;
    const headers = { 'Content-Type': 'application/json' };

    return this.http.put<any>(url, producto, { headers })
      .pipe(tap((res: any) => {
          console.log("Servicio de actualización:", res.message);
        }),
        catchError(err => of(err.error.message))
      );
  }

}
