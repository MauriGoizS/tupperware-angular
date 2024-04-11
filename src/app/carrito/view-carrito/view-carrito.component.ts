import { Component, OnInit, inject } from '@angular/core';
import { CarritoModelo } from '../../modelo/carrito.modelo';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-view-carrito',
  templateUrl: './view-carrito.component.html',
  styleUrls: ['./view-carrito.component.css']
})
export class ViewCarritoComponent implements OnInit {
  private readonly carritoService = inject(CarritoService);

  public carrito: CarritoModelo | null = null;
  public realizandoPedido: boolean = false;
  public pedidoRealizado: boolean = false;
  public guardadoAlPortapapeles: boolean = false;
  public idCompra: string = '';

  ngOnInit(): void {
    this.carrito = this.carritoService.carrito;
  }

  get total(): number {
    return this.carrito?.productos.reduce((total, producto) => {
      return total + (producto.precio * producto.cantidad);
    }, 0) || 0;
  }

  public eliminarCarrito(): void {
    this.carritoService.eliminarCarrito();
    this.carrito = null;
  }

  public eliminarProducto(idProducto: string): void {
    this.carritoService.eliminarProductoDelCarrito(idProducto);
    this.carrito = this.carritoService.carrito;
  }

  public realizarPedido(): void {
    this.realizandoPedido = true;
    this.carritoService.realizarPedido().subscribe(res => {
      this.realizandoPedido = false;
      if (res?._id) {
        this.idCompra = res._id;
        this.eliminarCarrito();
        this.pedidoRealizado = true;
      }
    });
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.idCompra).then(() => {
      this.guardadoAlPortapapeles = true;
      this.realizandoPedido = false;
      setTimeout(() => {
        this.pedidoRealizado = false;
        this.guardadoAlPortapapeles = false;
      }, 3000);
    });
  }
}
