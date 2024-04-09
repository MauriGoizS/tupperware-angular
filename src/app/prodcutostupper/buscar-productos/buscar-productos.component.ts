
import { Component } from '@angular/core';
import { ProductocatalogoService } from 'src/app/service/productocatalogo.service';
import { Catalogo } from 'src/app/modelo/catalogoprod.modelo';

@Component({
  selector: 'app-buscar-productos',
  templateUrl: './buscar-productos.component.html',
  styleUrls: ['./buscar-productos.component.css']
})
export class BuscarProductosComponent {
  listacatalogo: Catalogo[] = [];

  constructor(private catalogoservice: ProductocatalogoService ){}

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
