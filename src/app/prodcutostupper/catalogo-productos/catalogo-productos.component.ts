import { Component } from '@angular/core';



import { ProductocatalogoService } from 'src/app/service/productocatalogo.service';
import { Catalogo } from 'src/app/modelo/catalogoprod.modelo';


@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent {
listacatalogo: Catalogo [] = [];

constructor(private catalogoservice: ProductocatalogoService ){}

ngOnInit(): void {
  this.catalogoservice.obtenercatproducto()
  .subscribe(data=>{
    this.listacatalogo= data;
  })
}

}
