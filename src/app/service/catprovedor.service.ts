import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { CatalogoProveedoresComponent } from '../proveedores/catalogo-proveedores/catalogo-proveedores.component';
import { catproveedor } from '../modelo/catproveedor';


@Injectable({
  providedIn: 'root'
})
export class CatprovedorService {

  constructor(private http:HttpClient) { }
  
  obtenercat_proveedor(){
    return this.http.get<catproveedor[]>('http://127.0.0.1:4000/proveedor/get_all')

  }

  eliminar_prove(id:string | null){
    const apiUrl='http://127.0.0.1:4000'
    const url = `${apiUrl}/proveedor/eliminar/${id}`;
    return this.http.delete<any>(url)
    }

  obtenerPorId(id: string): Observable<catproveedor> {
    const apiUrl = 'http://127.0.0.1:4000';
    const url = `${apiUrl}/proveedor/porID/${id}`;
    return this.http.get<catproveedor>(url);
  }

  
  actualizarProducto(id: string, producto: Partial<catproveedor>): Observable<any> {
    const apiUrl = 'http://127.0.0.1:4000';
    const url = `${apiUrl}/proveedor/actualizar/${id}`;
    const headers = { 'Content-Type': 'application/json' };
  
    return this.http.put<any>(url, producto, { headers })
      .pipe(tap((res: any) => {
          console.log("Servicio de actualización:", res.message);
        }),
        catchError(err => of(err.error.message))
      );
  }
  obtenerPorNombre(nombre:string): Observable<catproveedor> {
    const apiUrl= 'http://127.0.0.1:4000';
    const url =  `${apiUrl}/proveedor/porNombre/${nombre}`;
    return this.http.get<catproveedor>(url); // Asegúrate de que estás devolviendo un Observable<catalogob>
  }

}
