import { Component } from '@angular/core';
import { CatprovedorService } from 'src/app/service/catprovedor.service';
import { catproveedor } from 'src/app/modelo/catproveedor';


@Component({
  selector: 'app-buscar-proveedor',
  templateUrl: './buscar-proveedor.component.html',
  styleUrls: ['./buscar-proveedor.component.css']
})
export class BuscarProveedorComponent {
  listacatalogo: catproveedor[] = [];

  constructor(private catalogoservice: CatprovedorService ){}
  
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
