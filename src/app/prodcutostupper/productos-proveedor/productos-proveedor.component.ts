import { Component } from '@angular/core';
import { Producto } from 'src/app/modelo/catalogoprod.modelo';
import { ProductocatalogoService } from 'src/app/service/productocatalogo.service';

@Component({
  selector: 'app-productos-proveedor',
  templateUrl: './productos-proveedor.component.html',
  styleUrls: ['./productos-proveedor.component.css']
})
export class ProductosProveedorComponent {
  listaProductoPreveedor: Producto[] = [];

  constructor(private productoProveedor: ProductocatalogoService) {}

  ngOnInit(): void {
    this.obtenerListadoProductoProveedor();
  }

  obtenerListadoProductoProveedor() {
    this.productoProveedor
      .obtenercatproducto()

      .subscribe((data) => {
        console.log(data);
        this.listaProductoPreveedor = data;
      });
  }
}
