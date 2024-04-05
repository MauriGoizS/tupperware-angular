import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route, Router } from '@angular/router';
import { ProductocatalogoService } from 'src/app/service/productocatalogo.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  prodId: string | null=null;
constructor(private ruta: Router,

private router: ActivatedRoute,
private servicioProd: ProductocatalogoService) { }

ngOnInit(): void {
this.prodId = this.router.snapshot.paramMap.get('id');
console.log(this.prodId);
this.eliminar()
}
res:any
messageErr:any
eliminar(){
try {
this.res=this.servicioProd.eliminar_prod(this.prodId)
.subscribe(data=>{
console.log(data)})
alert("producto eliminado")
//redirecciona para cargar el componente catálogo
this.ruta.navigate(['/productosCatalogo'])
}
catch(error: any) {
this.messageErr = error.error.message
}
}

}


