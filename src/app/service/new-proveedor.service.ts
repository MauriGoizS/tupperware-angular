import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { catproveedor } from '../modelo/catproveedor';

@Injectable({
  providedIn: 'root'
})
export class NewProveedorService {

  private apiUrl ='http://127.0.0.1:4000/proveedor/nuevoProd';

  constructor(private http:HttpClient) { }

  new_proovedor(miproveedor:catproveedor):Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.apiUrl, miproveedor,{headers}).pipe(
      tap((res: any)=>{
        if (res.message == "proveedor insertado"){
          console.log("servicio", res.message);
        }
      }),
      catchError(err=> of (err.error.message))
    );
  }
}
