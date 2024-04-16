import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Proveedor } from '../modelo/catproveedor';
import { catusuario } from '../modelo/catusuario';

@Injectable({
  providedIn: 'root'
})
export class NewUsuarioService {

  private apiUrl = 'http://127.0.0.1:4000/usuario/nuevoUsuario';

  constructor(private http:HttpClient) { }

  new_usuario(miUsuario:catusuario):Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.apiUrl, miUsuario,{headers}).pipe(
      tap((res: any)=>{
        if (res.message == "usuario insertado"){
          console.log("servicio", res.message);
        }
      }),
      catchError(err=> of (err.error.message))
    );
  }
}
