import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../services/carrito.service';
@Component({
  selector: 'app-eliminar-carrito',
  templateUrl: './eliminar-carrito.component.html',
  styleUrls: ['./eliminar-carrito.component.css'],
})
export class EliminarCarritoComponent {
  carritoId: string | null = null;
  constructor(
    private ruta: Router,
    private router: ActivatedRoute,
    private servidorCarrito: CarritoService
  ) {}

  ngOnInit(): void {
    this.carritoId = this.router.snapshot.paramMap.get('id');
    console.log(this.carritoId);
    // this.eliminar();
  }

  res: any;
  messageErr: any;
  // eliminar() {
  //   try {
  //     this.res = this.servidorCarrito
  //       .eliminar_carrito(this.carritoId)
  //       .subscribe((data) => {
  //         console.log(data);
  //       });
  //     alert('Carrito eliminado');
  //     //redirecciona para cargar el componente catálogo
  //     this.ruta.navigate(['/catalogo-empleado']);
  //   } catch (error: any) {
  //     this.messageErr = error.error.message;
  //   }
  // }
}
