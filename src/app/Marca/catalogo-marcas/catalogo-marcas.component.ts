import { Component } from '@angular/core';

import { CatmarcaService } from 'src/app/service/catmarca.service';
import { catmarca } from 'src/app/modelo/catmarca';


@Component({
  selector: 'app-catalogo-marcas',
  templateUrl: './catalogo-marcas.component.html',
  styleUrls: ['./catalogo-marcas.component.css']
})
export class CatalogoMarcasComponent {
  listacatmarca: catmarca[]=[]
  constructor(private catmarcaservice: CatmarcaService){}
  ngOnInit():void{
    this.catmarcaservice.obtenercat_marca()
    .subscribe(data=>{
      console.log(data);
      this.listacatmarca=data;
    });
  }
}
