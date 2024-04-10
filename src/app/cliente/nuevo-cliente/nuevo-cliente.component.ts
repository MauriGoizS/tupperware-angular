import { NewClienteService } from './../../service/cliente/new-cliente.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catcliente } from 'src/app/modelo/catcliente';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})

export class NuevoClienteComponent {
  miCliente: catcliente = {
    _id: '',
    correo: '',
    password: '',
    tel: '',
    edad: 0,
    direccion: '',
    nomuser: ''
  };

  constructor (
    private router: Router,
    private NewClienteService: NewClienteService
  ) {}



  enviarCliente() {
    this.NewClienteService.new_cliente(this.miCliente).subscribe(data => {
      console.log("Cliente", data);
      if (data) {
        this.router.navigateByUrl('/catalogo-cliente');
      } else {
        console.log("error");
      }
    });
  }
}
