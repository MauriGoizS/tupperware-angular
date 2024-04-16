import { ProductocatalogoService } from 'src/app/service/productocatalogo.service';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/modelo/catalogoprod.modelo';
import { CarritoService } from '../../carrito/services/carrito.service';
import { Producto as ProductoCarrito } from '../../modelo/carrito.modelo';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {

  private readonly productoCatalogoService = inject(ProductocatalogoService);
  private readonly router = inject(ActivatedRoute);
  private readonly carritoService = inject(CarritoService);

  public producto: Producto | null = null;
  public idProducto: string = '';
  public cantidad = 1;
  public mostrarAlerta = false;

  constructor() { }

  ngOnInit() {
    this.router.params.subscribe( (param: any ) => {
      this.idProducto = param?.id;
      if ( this.idProducto ) {
        this.obtenerProductoPorId( this.idProducto );
      }
    });
  }

  obtenerProductoPorId(id: string) {
    this.productoCatalogoService.obtenerPorId( id ).subscribe(res => {
      this.producto = res;
    });
  }

  agregarCantidad(cantidad: number) {
    if ( this.producto?.cantidadExistente && this.producto?.cantidadExistente > 0 && (this.cantidad + cantidad) > 0 && this.cantidad <= this.producto?.cantidadExistente  ) {
      this.cantidad = this.cantidad + cantidad;
    }
  }

  agregarAlCarrito() {
    const nuevoProducto: ProductoCarrito = {
      _id: this.idProducto,
      cantidad: this.cantidad,
      color: 'Rojo',
      foto: this.producto?.foto || '',
      nombre: this.producto?.nombre || '',
      precio: this.producto?.precio || 0
    }

    this.carritoService.agregarProductoAlCarrito(nuevoProducto);
    this.mostrarAlerta = true;

    setTimeout(() => {
      this.mostrarAlerta = false;
    }, 3000);
  }
}
