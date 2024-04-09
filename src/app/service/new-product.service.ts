import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Catalogo } from '../modelo/catalogoprod.modelo';

@Injectable({
  providedIn: 'root'
})
export class NewProductService {

  private apiUrl = 'http://127.0.0.1:4000/productos/nuevoProd'; // URL del endpoint API

  constructor(private http: HttpClient) { }

  // Función para insertar un nuevo producto en la base de datos MongoDB
  // Recibe como parámetro un objeto de tipo Producto y retorna un Observable
  new_product(miProd:Catalogo): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrl, miProd, { headers }).pipe(
      tap((res: any) => {
        if (res.message == "producto insertado") {
          console.log("servicio", res.message);
        }
      }),
      catchError(err => of(err.error.message))
    );
  }

}


