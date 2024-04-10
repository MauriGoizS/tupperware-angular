import { NewDepartamentoService } from './../../service/departamento/new-departamento.service';
import { Component } from '@angular/core';
import { catdepartamento } from 'src/app/modelo/catdepartamento';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-departamento',
  templateUrl: './nuevo-departamento.component.html',
  styleUrls: ['./nuevo-departamento.component.css']
})
export class NuevoDepartamentoComponent {

  miDepartamento: catdepartamento = {
    _id: '',
    nombre: '',
    estado: '',
    municipio: '',
    pais: '',
    num: 0,
    direccion: ''
  };

  constructor (
    private router: Router,
    private NewDepartamentoService: NewDepartamentoService
  ) {}


  enviarDepartamento() {
    this.NewDepartamentoService.new_departamento(this.miDepartamento).subscribe(data => {
      console.log("Departamento", data);
      if (data) {
        this.router.navigateByUrl('/catalogo-departamento');
      } else {
        console.log("error");
      }
    });
  }
}
