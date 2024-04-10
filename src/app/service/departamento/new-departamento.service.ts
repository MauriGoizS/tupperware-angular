import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { catdepartamento } from 'src/app/modelo/catdepartamento';

@Injectable({
  providedIn: 'root'
})
export class NewDepartamentoService {

  private apiUrl = 'http://127.0.0.1:4000/departamento/nuevodepartamento';

  constructor(private http:HttpClient) { }

  new_departamento(miDepartamento:catdepartamento):Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.apiUrl, miDepartamento,{headers}).pipe(
      tap((res: any)=>{
        if (res.message == "departamento insertado"){
          console.log("servicio", res.message);
        }
      }),
      catchError(err=> of (err.error.message))
    );
  }
}
