import { Component } from '@angular/core';
import { CatUsuarioService } from 'src/app/service/cat-usuario.service';
import { catusuario } from 'src/app/modelo/catusuario';


@Component({
  selector: 'app-catalogo-usuario',
  templateUrl: './catalogo-usuario.component.html',
  styleUrls: ['./catalogo-usuario.component.css']
})
export class CatalogoUsuarioComponent {
  listacatusuario: catusuario[]=[]
  
  constructor(private catusuario: CatUsuarioService){}

  ngOnInit(): void{
    this.catusuario.obtenercat_usuario()  
    .subscribe(data =>{
      console.log(data);
      this.listacatusuario=data;
    });
  }
}
