import { Component } from '@angular/core';
import { ActivatedRoute,Route, Router } from '@angular/router';
import { CatmarcaService } from 'src/app/service/catmarca.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarMarcaComponent {
  marcId:string | null = null;
  constructor(private ruta: Router,
    private router: ActivatedRoute,
    private servidormarc: CatmarcaService
    ){}
    ngOnInit(): void {
      this.marcId = this.router.snapshot.paramMap.get('id');
      console.log(this.marcId);
      this.eliminar()
      }
      
res:any
messageErr:any
eliminar(){
try {
this.res=this.servidormarc.eliminar_marca(this.marcId)
.subscribe(data=>{
console.log(data)})
alert("marca eliminada")
//redirecciona para cargar el componente catálogo
this.ruta.navigate(['/CatalogoMarca'])
}
catch(error: any) {
this.messageErr = error.error.message
}
}
}
