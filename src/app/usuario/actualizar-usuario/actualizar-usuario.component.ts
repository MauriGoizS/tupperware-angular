
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatUsuarioService } from 'src/app/service/cat-usuario.service';
import { catusuario } from 'src/app/modelo/catusuario';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent {
  usuarioId: string | null = null;
  usuario: catusuario | null = null;

  constructor(
    private route: ActivatedRoute,
    private catUsuaService: CatUsuarioService,
    private router: Router,
  ){}


  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.paramMap.get('id');
    console.log('ID del usuario a actualizar:', this.usuarioId);

    if (this.usuarioId) {
      this.catUsuaService.obtenerPorId(this.usuarioId)
        .subscribe(
          (usuario: catusuario) => {
            this.usuario = usuario;
            console.log('usuario obtenido:', this.usuario);
          },
          (error) => {
            console.error('Error al obtener el usuario:', error);
          }
        );
    }
}

actualizarUsuario(): void {
  if (this.usuarioId && this.usuario) {
    // Crear un objeto que contenga solo los campos modificados del producto
    const usuarioActualizado: Partial<catusuario> = {
      gmail: this.usuario.gmail,
      rol: this.usuario.rol,
      password: this.usuario.password,
    };

    this.catUsuaService.actualizarUsuario(this.usuarioId, usuarioActualizado)
      .subscribe(
        (res) => {
          console.log('usuario actualizado:', res);
          // Aquí puedes agregar lógica adicional después de la actualización
          // Redirige al usuario al catálogo después de la actualización
          this.router.navigate(['/catalogo-usuario']);
        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
          // Maneja el error según sea necesario
        }
      );
  } else {
    console.error('ID del usuario o usuario no válido.');
  }
}
}
