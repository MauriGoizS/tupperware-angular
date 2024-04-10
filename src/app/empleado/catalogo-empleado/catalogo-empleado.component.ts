import { Component } from '@angular/core';
import { CatEmpleadoService } from 'src/app/service/empleado/cat-empleado.service';
import { catempleado } from 'src/app/modelo/catempleado';

@Component({
  selector: 'app-catalogo-empleado',
  templateUrl: './catalogo-empleado.component.html',
  styleUrls: ['./catalogo-empleado.component.css']
})
export class CatalogoEmpleadoComponent {
  listacatEmpleado: catempleado[]=[]

  constructor(private catempleado: CatEmpleadoService){}

  ngOnInit(): void{
    this.catempleado.obtenercat_empleado()
    .subscribe(data =>{
      console.log(data);
      this.listacatEmpleado=data;
    });
  }
}
