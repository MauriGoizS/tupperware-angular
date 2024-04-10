import { Component } from '@angular/core';
import { catcliente } from 'src/app/modelo/catcliente';
import { CatClienteService } from 'src/app/service/cliente/cat-cliente.service';

@Component({
  selector: 'app-catalogo-cliente',
  templateUrl: './catalogo-cliente.component.html',
  styleUrls: ['./catalogo-cliente.component.css']
})
export class CatalogoClienteComponent {
  listacatCliente: catcliente[]=[]

  constructor(private catcliente: CatClienteService){}

  ngOnInit(): void{
    this.catcliente.obtenercat_cliente()
    .subscribe(data =>{
      console.log(data);
      this.listacatCliente=data;
    });
  }
}
