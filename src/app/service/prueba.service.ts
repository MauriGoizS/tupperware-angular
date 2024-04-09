import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalogo } from '../modelo/catalogoprod.modelo';
import { Observable , of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http:HttpClient) { }


    prueba(nombre: string): Observable<Catalogo> {
      const apiUrl = 'http://127.0.0.1:4000';
      const url = `${apiUrl}/productos/porNombre/${nombre}`;
      return this.http.get<Catalogo>(url);
  }
}

