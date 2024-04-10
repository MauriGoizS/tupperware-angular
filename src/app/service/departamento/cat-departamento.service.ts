import { Injectable } from '@angular/core';
import { catdepartamento } from 'src/app/modelo/catdepartamento';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatDepartamentoService {

  constructor(private http:HttpClient) { }

  obtenercat_departamento(){
    return this.http.get<catdepartamento[]>('http://127.0.0.1:4000/departamento/get_all')

  }

  eliminar_departamento(id:string | null){
    const apiUrl='http://127.0.0.1:4000'
    const url = `${apiUrl}/departamento/eliminar/${id}`;
    return this.http.delete<any>(url)
    }

    obtenerPorId(id: string): Observable<catdepartamento> {
      const apiUrl = 'http://127.0.0.1:4000';
      const url = `${apiUrl}/departamento/porID/${id}`;
      return this.http.get<catdepartamento>(url);
    }

  actualizardepartamento(id: string, producto: Partial<catdepartamento>): Observable<any> {
    const apiUrl = 'http://127.0.0.1:4000';
    const url = `${apiUrl}/departamento/actualizar/${id}`;
    const headers = { 'Content-Type': 'application/json' };

    return this.http.put<any>(url, producto, { headers })
      .pipe(tap((res: any) => {
          console.log("Servicio de actualización:", res.message);
        }),
        catchError(err => of(err.error.message))
      );
  }

}

