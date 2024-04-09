import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { catusuario } from '../modelo/catusuario';
import { CatalogoUsuarioComponent } from '../usuario/catalogo-usuario/catalogo-usuario.component';

@Injectable({
  providedIn: 'root'
})
export class CatUsuarioService {

  constructor(private http:HttpClient) { }
  
  obtenercat_usuario(){
    return this.http.get<catusuario[]>('http://127.0.0.1:4000/usuario/get_all')

  }

  eliminar_usuario(id:string | null){
    const apiUrl='http://127.0.0.1:4000'
    const url = `${apiUrl}/usuario/eliminar/${id}`;
    return this.http.delete<any>(url)
    }

    
  actualizarUsuario(id: string, producto: Partial<catusuario>): Observable<any> {
    const apiUrl = 'http://127.0.0.1:4000';
    const url = `${apiUrl}/usuario/actualizar/${id}`;
    const headers = { 'Content-Type': 'application/json' };
  
    return this.http.put<any>(url, producto, { headers })
      .pipe(tap((res: any) => {
          console.log("Servicio de actualización:", res.message);
        }),
        catchError(err => of(err.error.message))
      );
  }

}
