import { Component } from '@angular/core';
import { Producto } from 'src/app/modelo/catalogoprod.modelo';
import { ProductocatalogoService } from 'src/app/service/productocatalogo.service';

@Component({
  selector: 'app-productos-proveedor',
  templateUrl: './productos-proveedor.component.html',
  styleUrls: ['./productos-proveedor.component.css'],
})
export class ProductosProveedorComponent {
  listaProductoPreveedor: Producto[] = [];

  constructor(private productoProveedor: ProductocatalogoService) {}

  ngOnInit(): void {
    this.obtenerListadoProductoProveedor();
  }

  // Método para obtener el listado de productos proveedor desde el servicio
  obtenerListadoProductoProveedor() {
    // Llamada al método obtenercatproducto del servicio ProductocatalogoService
    this.productoProveedor
      .obtenercatproducto()

      .subscribe((data) => {
        console.log(data);
        // Asignación de los datos obtenidos a la variable listaProductoPreveedor
        this.listaProductoPreveedor = data;
      });
  }
}
