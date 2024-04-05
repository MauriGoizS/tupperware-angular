import { Component } from '@angular/core';



import { ProductocatalogoService } from 'src/app/service/productocatalogo.service';
import { catalogo } from 'src/app/modelo/catalogoprod.modelo';


@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent {
listacatalogo: catalogo []=[]

constructor(private catalogoservice: ProductocatalogoService ){}

ngOnInit(): void {
  this.catalogoservice.obtenercatproducto()
  .subscribe(data=>{
    console.log(data);
    this.listacatalogo= data;
  })
}

}
