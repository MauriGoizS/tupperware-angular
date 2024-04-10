import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CatEmpleadoService } from 'src/app/service/empleado/cat-empleado.service';

@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './eliminar-empleado.component.html',
  styleUrls: ['./eliminar-empleado.component.css']
})
export class EliminarEmpleadoComponent {
  empleadoId:string | null= null;
  constructor(private ruta: Router,
    private router: ActivatedRoute,
    private servidorEmpleado: CatEmpleadoService
    ){}

ngOnInit(): void {
  this.empleadoId = this.router.snapshot.paramMap.get('id');
  console.log(this.empleadoId);
  this.eliminar()
  }

res:any
messageErr:any
eliminar(){
try {
this.res=this.servidorEmpleado.eliminar_empleado(this.empleadoId)
.subscribe(data=>{
console.log(data)})
alert("Empleado eliminado")
//redirecciona para cargar el componente catálogo
this.ruta.navigate(['/catalogo-empleado'])
}
catch(error: any) {
this.messageErr = error.error.message
}
}
}
