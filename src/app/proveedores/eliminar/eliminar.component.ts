import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Proveedor } from 'src/app/modelo/catproveedor';
import { catalogoproductos } from 'src/app/modelo/productocatalogo';
import { CatprovedorService } from 'src/app/service/catprovedor.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css'],
})
export class EliminarComponentProveedor {
  prodId: string | null = null;
  constructor(
    private ruta: Router,
    private router: ActivatedRoute,
    private servidorprove: CatprovedorService
  ) {}

  ngOnInit(): void {
    this.prodId = this.router.snapshot.paramMap.get('id');
    console.log(this.prodId);
    this.eliminar();
  }

  res: any;
  messageErr: any;
  eliminar() {
    try {
      this.res = this.servidorprove
        .eliminar_prove(this.prodId)
        .subscribe((data) => {
          console.log(data);
        });
      alert('Proveedor eliminado');
      //redirecciona para cargar el componente catálogo
      this.ruta.navigate(['/CatalogoProveedor']);
    } catch (error: any) {
      this.messageErr = error.error.message;
    }
  }
}
