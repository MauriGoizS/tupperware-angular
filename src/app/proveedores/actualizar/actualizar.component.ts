import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatprovedorService } from 'src/app/service/catprovedor.service';
import { Proveedor } from 'src/app/modelo/catproveedor';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponentProveedor {
  provId: string | null = null;
  proveedor: Proveedor | null = null;

  constructor(
    private route: ActivatedRoute,
    private catprovservice: CatprovedorService,
    private router: Router,
  ){}


  ngOnInit(): void {
    this.provId = this.route.snapshot.paramMap.get('id');
    console.log('ID del proveedor a actualizar:', this.provId);

    if (this.provId) {
      this.catprovservice.obtenerPorId(this.provId)
        .subscribe(
          (proveedor: Proveedor) => {
            this.proveedor = proveedor;
            console.log('proveedor obtenido:', this.proveedor);
          },
          (error) => {
            console.error('Error al obtener el proveedor:', error);
          }
        );
    }
}

actualizarProveedor(): void {
  if (this.provId && this.proveedor) {
    // Crear un objeto que contenga solo los campos modificados del producto
    const proveedorActualizado: Partial<Proveedor> = {
      nombre: this.proveedor.nombre,
      tel: this.proveedor.tel,
      rfc: this.proveedor.rfc,
      estado: this.proveedor.estado,
      // Agrega más campos según sea necesario
    };

    this.catprovservice.actualizarProducto(this.provId, proveedorActualizado)
      .subscribe(
        (res) => {
          console.log('proveedor actualizado:', res);
          // Aquí puedes agregar lógica adicional después de la actualización
          // Redirige al usuario al catálogo después de la actualización
          this.router.navigate(['/CatalogoProveedor']);
        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
          // Maneja el error según sea necesario
        }
      );
  } else {
    console.error('ID del proveedor o proveedor no válido.');
  }
}



}
