import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { catempleado } from 'src/app/modelo/catempleado';

@Injectable({
  providedIn: 'root'
})
export class NewEmpleadoService {

  private apiUrl = 'http://127.0.0.1:4000/empleado/nuevoempleado';

  constructor(private http:HttpClient) { }

  new_empleado(miEmpleado:catempleado):Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.apiUrl, miEmpleado,{headers}).pipe(
      tap((res: any)=>{
        if (res.message == "empleado insertado"){
          console.log("servicio", res.message);
        }
      }),
      catchError(err=> of (err.error.message))
    );
  }
}
