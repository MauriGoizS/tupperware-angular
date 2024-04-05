import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catmarca } from 'src/app/modelo/catmarca';
import { NewMarcaService } from 'src/app/service/new-marca.service';

@Component({
  selector: 'app-nueva-marca',
  templateUrl: './nueva-marca.component.html',
  styleUrls: ['./nueva-marca.component.css']
})

export class NuevaMarcaComponent {
  image: string = '';
  nuevaMarca: catmarca = { // Definición de la propiedad nuevaMarca
    _id: '',
    nombre: '',
    propietario: '',
    rfc: '',
    tel: 0,
    foto: ''
  };

  convertir_B64(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => (this.image = reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  constructor(
    private router: Router,
    private newMarca: NewMarcaService
  ){}

  enviarMarca() {
    this.nuevaMarca.tel = Number(this.nuevaMarca.tel);
    this.nuevaMarca.foto = this.image;
    console.log(this.nuevaMarca);

    this.newMarca.new_marca(this.nuevaMarca).subscribe(data => {
      console.log("MARCA", data);
      if (data) {
        this.router.navigateByUrl('/CatalogoMarca');
      } else {
        console.log("error");
      }
    });
  }
}
