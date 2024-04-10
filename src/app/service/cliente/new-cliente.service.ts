import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { catcliente } from 'src/app/modelo/catcliente';

@Injectable({
  providedIn: 'root'
})
export class NewClienteService {

  private apiUrl = 'http://127.0.0.1:4000/cliente/nuevocliente';

  constructor(private http:HttpClient) { }

  new_cliente(miCliente:catcliente):Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.apiUrl, miCliente,{headers}).pipe(
      tap((res: any)=>{
        if (res.message == "Cliente insertado"){
          console.log("servicio", res.message);
        }
      }),
      catchError(err=> of (err.error.message))
    );
  }
}

