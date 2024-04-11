import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../../carrito/services/carrito.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  private readonly carritoService = inject(CarritoService);

  constructor(
    private route: Router
  ) {}

  goToCarrito() {
    console.log('Logica para ir al carrito');
    this.route.navigateByUrl('carrito');
  }

  get numArticulos(): number {
    return this.carritoService.carrito?.productos.length || 0;
  }
}
