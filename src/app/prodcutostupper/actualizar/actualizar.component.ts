import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/modelo/catalogoprod.modelo';
import { ProductocatalogoService } from 'src/app/service/productocatalogo.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {
  prodId : string | null = null;
  producto: Producto | null = null;
  image: string = '';


  constructor(
    private route : ActivatedRoute,
    private catalogoservice : ProductocatalogoService,
    private router: Router,
  ){}

  convertir_B64(event: any) {
    if (event.target.files && event.target.files[0] && this.producto) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.image = reader.result as string;
        // Asignar la imagen convertida al objeto producto
        if (this.producto) {
          this.producto.foto = this.image;
        }
      };
      reader.readAsDataURL(file);
    }
}

  ngOnInit(): void {
    this.prodId = this.route.snapshot.paramMap.get('id');
    console.log('ID del producto a actualizar:', this.prodId);

    if (this.prodId) {
      this.catalogoservice.obtenerPorId(this.prodId)
        .subscribe(
          (producto: Producto) => {
            this.producto = producto;
            console.log('Producto obtenido:', this.producto);
          },
          (error) => {
            console.error('Error al obtener el producto:', error);
          }
        );
    }
}

actualizarProducto(): void {
  if (this.prodId && this.producto) {
    // Crear un objeto que contenga solo los campos modificados del producto
    const productoActualizado: Partial<Producto> = {
      nombre: this.producto.nombre,
      costo: this.producto.costo,
      status: this.producto.status,
      foto: this.producto.foto,
      cantidadExistente: this.producto.cantidadExistente,
      modelo: this.producto.modelo,
      // Agrega más campos según sea necesario
    };

    this.catalogoservice.actualizarProducto(this.prodId, productoActualizado)
      .subscribe(
        (res) => {
          console.log('Producto actualizado:', res);
          // Aquí puedes agregar lógica adicional después de la actualización
          // Redirige al usuario al catálogo después de la actualización
          this.router.navigate(['/productosCatalogo']);
        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
          // Maneja el error según sea necesario
        }
      );
  } else {
    console.error('ID del producto o producto no válido.');
  }
}



}

