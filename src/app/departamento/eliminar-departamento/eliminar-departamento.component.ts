import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CatDepartamentoService } from 'src/app/service/departamento/cat-departamento.service';
@Component({
  selector: 'app-eliminar-departamento',
  templateUrl: './eliminar-departamento.component.html',
  styleUrls: ['./eliminar-departamento.component.css']
})
export class EliminarDepartamentoComponent {
  departamentoId:string | null= null;
  constructor(private ruta: Router,
    private router: ActivatedRoute,
    private servidorDepartamento: CatDepartamentoService
    ){}

ngOnInit(): void {
  this.departamentoId = this.router.snapshot.paramMap.get('id');
  console.log(this.departamentoId);
  this.eliminar()
  }

res:any
messageErr:any
eliminar(){
try {
this.res=this.servidorDepartamento.eliminar_departamento(this.departamentoId)
.subscribe(data=>{
console.log(data)})
alert("Departamento eliminado")
//redirecciona para cargar el componente catálogo
this.ruta.navigate(['/catalogo-departamento'])
}
catch(error: any) {
this.messageErr = error.error.message
}
}
}
