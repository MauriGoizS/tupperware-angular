import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CatClienteService } from 'src/app/service/cliente/cat-cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent {
  clienteId:string | null= null;
  constructor(private ruta: Router,
    private router: ActivatedRoute,
    private servidorCliente: CatClienteService
    ){}

ngOnInit(): void {
  this.clienteId = this.router.snapshot.paramMap.get('id');
  console.log(this.clienteId);
  this.eliminar()
  }

res:any
messageErr:any
eliminar(){
try {
this.res=this.servidorCliente.eliminar_cliente(this.clienteId)
.subscribe(data=>{
console.log(data)})
alert("Cliente eliminado")
//redirecciona para cargar el componente catálogo
this.ruta.navigate(['/catalogo-cliente'])
}
catch(error: any) {
this.messageErr = error.error.message
}
}
}
