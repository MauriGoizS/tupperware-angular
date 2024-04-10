import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatEmpleadoService } from 'src/app/service/empleado/cat-empleado.service';
import { catempleado } from 'src/app/modelo/catempleado';
@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent {
  empleadoId: string | null = null;
  empleado: catempleado | null = null;

  constructor(
    private route: ActivatedRoute,
    private CatEmpleadoService: CatEmpleadoService,
    private router: Router,
  ){}


  ngOnInit(): void {
    this.empleadoId = this.route.snapshot.paramMap.get('id');
    console.log('ID del empleado a actualizar:', this.empleadoId);

    if (this.empleadoId) {
      this.CatEmpleadoService.obtenerPorId(this.empleadoId)
        .subscribe(
          (empleado: catempleado) => {
            this.empleado = empleado;
            console.log('empleado obtenido:', this.empleado);
          },
          (error) => {
            console.error('Error al obtener el empleado:', error);
          }
        );
    }
}

actualizarEmpleado(): void {
  if (this.empleadoId && this.empleado) {
    // Crear un objeto que contenga solo los campos modificados del producto
    const empleadoActualizado: Partial<catempleado> = {
      gmail: this.empleado.gmail,
      direccion: this.empleado.direccion,
      edad: this.empleado.edad,
    };

    this.CatEmpleadoService.actualizarEmpleado(this.empleadoId, empleadoActualizado)
      .subscribe(
        (res) => {
          console.log('empleado actualizado:', res);
          // Aquí puedes agregar lógica adicional después de la actualización
          // Redirige al empleado al catálogo después de la actualización
          this.router.navigate(['/catalogo-empleado']);
        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
          // Maneja el error según sea necesario
        }
      );
  } else {
    console.error('ID del empleado o empleado no válido.');
  }
}
}
