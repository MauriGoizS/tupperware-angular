import { Component } from '@angular/core';
import { catmarca } from 'src/app/modelo/catmarca';
import { CatmarcaService } from 'src/app/service/catmarca.service';
@Component({
  selector: 'app-buscar-marca',
  templateUrl: './buscar-marca.component.html',
  styleUrls: ['./buscar-marca.component.css']
})
export class BuscarMarcaComponent {
  listacatalogo: catmarca[] = [];

  constructor(private catalogoservice: CatmarcaService ){}
  
  buscarProductos(nombre: string): void {
    if (nombre.trim() !== '') { // Verifica que el nombre no esté vacío
      this.catalogoservice.obtenerPorNombre(nombre)
        .subscribe(data => {
          console.log(data);
          if (Array.isArray(data)) {
            this.listacatalogo = data;
          } else {
            this.listacatalogo = [data]; // Encapsula el resultado en un array
          }
        });
    } else {
      console.log('Ingrese un nombre válido'); // Maneja el caso en que el nombre esté vacío
    }
  }
}


