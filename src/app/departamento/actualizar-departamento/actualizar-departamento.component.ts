import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatDepartamentoService } from 'src/app/service/departamento/cat-departamento.service';
import { catdepartamento } from 'src/app/modelo/catdepartamento';

@Component({
  selector: 'app-actualizar-departamento',
  templateUrl: './actualizar-departamento.component.html',
  styleUrls: ['./actualizar-departamento.component.css']
})
export class ActualizarDepartamentoComponent {
  departamentoId: string | null = null;
  departamento: catdepartamento | null = null;

  constructor(
    private route: ActivatedRoute,
    private CatDepartamentoService: CatDepartamentoService,
    private router: Router,
  ){}


  ngOnInit(): void {
    this.departamentoId = this.route.snapshot.paramMap.get('id');
    console.log('ID del departamento a actualizar:', this.departamentoId);

    if (this.departamentoId) {
      this.CatDepartamentoService.obtenerPorId(this.departamentoId)
        .subscribe(
          (departamento: catdepartamento) => {
            this.departamento = departamento;
            console.log('departamento obtenido:', this.departamento);
          },
          (error) => {
            console.error('Error al obtener el departamento:', error);
          }
        );
    }
}

actualizardepartamento(): void {
  if (this.departamentoId && this.departamento) {
    // Crear un objeto que contenga solo los campos modificados del producto
    const departamentoActualizado: Partial<catdepartamento> = {
      nombre: this.departamento.nombre,
      direccion: this.departamento.direccion,
      num: this.departamento.num,
    };

    this.CatDepartamentoService.actualizardepartamento(this.departamentoId, departamentoActualizado)
      .subscribe(
        (res) => {
          console.log('departamento actualizado:', res);
          // Aquí puedes agregar lógica adicional después de la actualización
          // Redirige al departamento al catálogo después de la actualización
          this.router.navigate(['/catalogo-departamento']);
        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
          // Maneja el error según sea necesario
        }
      );
  } else {
    console.error('ID del departamento o departamento no válido.');
  }
}
}
