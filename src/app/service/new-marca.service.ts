import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { catmarca } from '../modelo/catmarca';  

@Injectable({
  providedIn: 'root'
})
export class NewMarcaService {
  private apiUrl ='http://127.0.0.1:4000/marca/nuevaMarca';
  constructor(private http: HttpClient) { }

  new_marca(mimarca:catmarca):Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.apiUrl, mimarca,{headers}).pipe(
      tap((res: any)=>{
        if (res.message == "marca insertada"){
          console.log("servicio", res.message);
        }
      }),
      catchError(err=> of (err.error.message))
    );
  }
}
