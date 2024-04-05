import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { catmarca } from 'src/app/modelo/catmarca';
import { CatmarcaService } from 'src/app/service/catmarca.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarMarcaComponent {
marcId: string |null=null;
marca:catmarca | null = null;
constructor(
  private route: ActivatedRoute,
  private catmarcaserve: CatmarcaService,
  private router: Router,
){}


ngOnInit(): void {
  this.marcId = this.route.snapshot.paramMap.get('id');
  console.log('ID del proveedor a actualizar:', this.marcId);
  
  if (this.marcId) {
    this.catmarcaserve.obtenerPorId(this.marcId)
      .subscribe(
        (proveedor: catmarca) => {
          this.marca = proveedor;
          console.log('proveedor obtenido:', this.marca);
        },
        (error) => {
          console.error('Error al obtener el proveedor:', error);
        }
      );
  }
}


actualizarMarca(): void {
  if (this.marcId && this.marca) {
    // Crear un objeto que contenga solo los campos modificados del producto
    const marcaActualizado: Partial<catmarca> = {
      nombre: this.marca.nombre,
      tel: this.marca.tel,
      rfc: this.marca.rfc,
      propietario: this.marca.propietario,
      // Agrega más campos según sea necesario
    };

    this.catmarcaserve.actualizarProducto(this.marcId, marcaActualizado)
      .subscribe(
        (res) => {
          console.log('marca actualizada:', res);
          // Aquí puedes agregar lógica adicional después de la actualización
          // Redirige al usuario al catálogo después de la actualización
          this.router.navigate(['/CatalogoMarca']);
        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
          // Maneja el error según sea necesario
        }
      );
  } else {
    console.error('ID del marca o proveedor no válido.');
  }
}

}
