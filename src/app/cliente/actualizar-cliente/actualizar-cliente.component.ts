import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatClienteService } from 'src/app/service/cliente/cat-cliente.service';
import { catcliente } from 'src/app/modelo/catcliente';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent {
  clienteId: string | null = null;
  cliente: catcliente | null = null;

  constructor(
    private route: ActivatedRoute,
    private CatClienteService: CatClienteService,
    private router: Router,
  ){}


  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('id');
    console.log('ID del cliente a actualizar:', this.clienteId);

    if (this.clienteId) {
      this.CatClienteService.obtenerPorId(this.clienteId)
        .subscribe(
          (cliente: catcliente) => {
            this.cliente = cliente;
            console.log('cliente obtenido:', this.cliente);
          },
          (error) => {
            console.error('Error al obtener el cliente:', error);
          }
        );
    }
}

actualizarcliente(): void {
  if (this.clienteId && this.cliente) {
    // Crear un objeto que contenga solo los campos modificados del producto
    const clienteActualizado: Partial<catcliente> = {
      nomuser: this.cliente.nomuser,
      direccion: this.cliente.direccion,
      tel: this.cliente.tel,
    };

    this.CatClienteService.actualizarcliente(this.clienteId, clienteActualizado)
      .subscribe(
        (res) => {
          console.log('cliente actualizado:', res);
          // Aquí puedes agregar lógica adicional después de la actualización
          // Redirige al cliente al catálogo después de la actualización
          this.router.navigate(['/catalogo-cliente']);
        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
          // Maneja el error según sea necesario
        }
      );
  } else {
    console.error('ID del cliente o cliente no válido.');
  }
}
}


