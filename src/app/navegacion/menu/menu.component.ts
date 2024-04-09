import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  numArticulos = 19;

  constructor(
    private route: Router
  ) {}

  goToCarrito() {
    console.log('Logica para ir al carrito');
    this.route.navigateByUrl('carrito');
  }
}
