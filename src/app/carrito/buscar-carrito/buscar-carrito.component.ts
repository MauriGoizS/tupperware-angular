import { CarritoModelo } from './../../modelo/carrito.modelo';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-carrito',
  templateUrl: './buscar-carrito.component.html',
  styleUrls: ['./buscar-carrito.component.css'],
})
export class BuscarCarritoComponent implements OnInit, AfterViewInit {

  private readonly carritoService = inject(CarritoService);
  private readonly router = inject(ActivatedRoute);

  public buscando = false;
  public error = false;
  public id: string = '';
  public carrito: CarritoModelo | null = null;
  public idCarritoParam: string | null = null;
  @ViewChild('inputCarritoId') inputCarrito!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.router.params.subscribe((parametros: any) => {
      if (parametros.idCarrito) {
        this.idCarritoParam = parametros.idCarrito;
        this.buscarCarritoPorId(parametros.idCarrito);
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.idCarritoParam) {
      this.inputCarrito.nativeElement.value = this.idCarritoParam;
    }
  }

  buscarCarritoPorId(carritoId: string): void {
    if (carritoId) {
      this.carrito = null;
      this.id = carritoId;
      this.buscando = true;
      this.error = false;
      this.carritoService.obtenerCarritoPorId(carritoId).subscribe({
        next: res => {
          this.carrito = res;
          this.buscando = false;
        },
        error: error => {
          console.log('error', error);
          this.buscando = false;
          this.error = true;
          this.carrito = null;
        }
      });
    }
  }

  get total(): number {
    return this.carrito?.productos.reduce((total, producto) => {
      return total + (producto.precio * producto.cantidad);
    }, 0) || 0;
  }
}
