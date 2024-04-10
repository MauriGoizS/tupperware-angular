import { catdepartamento } from './../../modelo/catdepartamento';
import { Component } from '@angular/core';
import { CatDepartamentoService } from 'src/app/service/departamento/cat-departamento.service';

@Component({
  selector: 'app-catologo-departamento',
  templateUrl: './catologo-departamento.component.html',
  styleUrls: ['./catologo-departamento.component.css']
})
export class CatologoDepartamentoComponent {
  listacatDepartamento: catdepartamento[]=[]

  constructor(private catdepartamento: CatDepartamentoService){}

  ngOnInit(): void{
    this.catdepartamento.obtenercat_departamento()
    .subscribe(data =>{
      console.log(data);
      this.listacatDepartamento=data;
    });
  }
}
