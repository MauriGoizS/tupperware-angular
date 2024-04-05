import { Component } from '@angular/core';


import { CatprovedorService } from 'src/app/service/catprovedor.service';

import { catproveedor } from 'src/app/modelo/catproveedor';


@Component({
  selector: 'app-catalogo-proveedores',
  templateUrl: './catalogo-proveedores.component.html',
  styleUrls: ['./catalogo-proveedores.component.css']
})
export class CatalogoProveedoresComponent {

  listacatproveedor: catproveedor[]=[]
  constructor(private catproveedor: CatprovedorService){}

  ngOnInit(): void{
    this.catproveedor.obtenercat_proveedor()
    
    .subscribe(data =>{
      console.log(data);
      this.listacatproveedor=data;
    });
  }
}
