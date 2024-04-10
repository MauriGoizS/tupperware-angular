import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewEmpleadoService } from 'src/app/service/empleado/new-empleado.service';
import { catempleado } from 'src/app/modelo/catempleado';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent {

  image: string = '';
  miEmpleado: catempleado = {
    _id: '',
    gmail: '',
    password: '',
    status: '',
    edad: 0,
    foto: '',
    direccion: ''
  };

  constructor (
    private router: Router,
    private NewEmpleadoService: NewEmpleadoService
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

  enviarEmpleado() {
    this.NewEmpleadoService.new_empleado(this.miEmpleado).subscribe(data => {
      console.log("Empleado", data);
      if (data) {
        this.router.navigateByUrl('/catalogo-empleado');
      } else {
        console.log("error");
      }
    });
  }
}
