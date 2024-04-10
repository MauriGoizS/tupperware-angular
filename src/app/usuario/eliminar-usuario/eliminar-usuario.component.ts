import { CatUsuarioService } from 'src/app/service/cat-usuario.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent {
  usuarioId:string | null= null;
  constructor(private ruta: Router,
    private router: ActivatedRoute,
    private servidorUsuario: CatUsuarioService
    ){}

ngOnInit(): void {
  this.usuarioId = this.router.snapshot.paramMap.get('id');
  console.log(this.usuarioId);
  this.eliminar()
  }

res:any
messageErr:any
eliminar(){
try {
this.res=this.servidorUsuario.eliminar_usuario(this.usuarioId)
.subscribe(data=>{
console.log(data)})
alert("usuario eliminado")
//redirecciona para cargar el componente catálogo
this.ruta.navigate(['/catalogo-usuario'])
}
catch(error: any) {
this.messageErr = error.error.message
}
}
}
