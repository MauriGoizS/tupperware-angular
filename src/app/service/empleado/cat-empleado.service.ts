import { catempleado } from './../../modelo/catempleado';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatEmpleadoService {

  constructor(private http:HttpClient) { }

  obtenercat_empleado(){
    return this.http.get<catempleado[]>('http://127.0.0.1:4000/empleado/get_all')

  }

  eliminar_empleado(id:string | null){
    const apiUrl='http://127.0.0.1:4000'
    const url = `${apiUrl}/empleado/eliminar/${id}`;
    return this.http.delete<any>(url)
    }

    obtenerPorId(id: string): Observable<catempleado> {
      const apiUrl = 'http://127.0.0.1:4000';
      const url = `${apiUrl}/empleado/porID/${id}`;
      return this.http.get<catempleado>(url);
    }

  actualizarEmpleado(id: string, producto: Partial<catempleado>): Observable<any> {
    const apiUrl = 'http://127.0.0.1:4000';
    const url = `${apiUrl}/empleado/actualizar/${id}`;
    const headers = { 'Content-Type': 'application/json' };

    return this.http.put<any>(url, producto, { headers })
      .pipe(tap((res: any) => {
          console.log("Servicio de actualización:", res.message);
        }),
        catchError(err => of(err.error.message))
      );
  }

}
