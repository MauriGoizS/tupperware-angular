import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewUsuarioService } from './../../service/new-usuario.service';
import { catusuario } from 'src/app/modelo/catusuario';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {

  image: string = '';
  misUsuarios: catusuario = {
    _id:'',
    foto: '',
    gmail: '',
    rol: '',
    password: ''
  };

  constructor (
    private router: Router,
    private newUsuarioService: NewUsuarioService
  ) {}

  convertir_B64(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  enviarUsuario() {
    this.newUsuarioService.new_usuario(this.misUsuarios).subscribe(data => {
      console.log("Usuario", data);
      if (data) {
        this.router.navigateByUrl('/catalogo-usuario');
      } else {
        console.log("error");
      }
    });
  }
}
