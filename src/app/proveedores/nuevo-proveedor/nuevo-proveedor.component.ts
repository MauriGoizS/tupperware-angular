import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/modelo/catproveedor';
import { NewProveedorService } from 'src/app/service/new-proveedor.service'; // Importa el servicio correcto
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styleUrls: ['./nuevo-proveedor.component.css']
})
export class NuevoProveedorComponent {

  constructor(
    private router: Router,
    private newProveedorService: NewProveedorService // Inyecta el servicio correcto
  ) {}

  misproveedores: Proveedor = {
    _id: '',
    nombre: '',
    estado: '',
    tel: 0,
    rfc: ''
  };

  enviarProd() {
    this.misproveedores.tel = Number(this.misproveedores.tel);
    console.log(this.misproveedores);

    this.newProveedorService.new_proovedor(this.misproveedores).subscribe(data => {
      console.log("PROVEEDOR", data);
      if (data) {
        this.router.navigateByUrl('/CatalogoProveedor');
      } else {
        console.log("error");
      }
    });
  }
}
