import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { catmarca } from 'src/app/modelo/catmarca';
import { catalogo, clasificacion, dimensiones } from 'src/app/modelo/catalogoprod.modelo';
import { CatmarcaService } from 'src/app/service/catmarca.service';
import { ProductocatalogoService } from 'src/app/service/productocatalogo.service';
import { NewProductService } from 'src/app/service/new-product.service'; // Importa NewProductService

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {
  listaMarcas: catmarca[] = [];
  image: string = '';

  opcionesColores: string[] = ['Azul', 'Rojo', 'Rosa', 'Verde'];
  coloresSeleccionados: string[] = [];

  constructor(
    private router: Router, // Inyecta Router
    private servicioMarc: CatmarcaService,
    private servicioProd: ProductocatalogoService,
    private newProductService: NewProductService // Inyecta NewProductService
  ) {}

  convertir_B64(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => (this.image = reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  ngOnInit() {
    this.servicioMarc.obtenercat_marca().subscribe(data => {
      console.log(data);
      this.listaMarcas = data;
    });
  }

  miclasificacion: clasificacion = {
    nomClasificacion: '',
    Descripcion: ''
  };

  midimensiones: dimensiones = {
    altura: 0,
    ancho: 0,
    largo: 0,
    capacidad: 0
  };

  miproducto: catalogo = {
    _id: '',
    nombre: '',
    clasificacion: this.miclasificacion,
    modelo: '',
    costo: 0,
    precio: 0,
    dimensiones: this.midimensiones,
    numeroDePiezas: 0,
    color: this.coloresSeleccionados, // Inicializa con colores seleccionados
    foto: '',
    fechaAdquisicion: '',
    cantidadExistente: 0,
    status: '',
    ciudadanosRecomendados: 0,
    materialFabricacion: '',
    paisOrigen: 0,
    proveedorId: 0,
    marcaId: '',
    estado: ''
  };

  get_id_marca(id: any) {
    this.miproducto.marcaId = id;
    console.log(this.miproducto.marcaId);
  }

  enviarProd() {
    this.miproducto.costo = Number(this.miproducto.costo);
    this.miproducto.foto = this.image; 
    console.log(this.miproducto);


    this.newProductService.new_product(this.miproducto).subscribe(data => {
      console.log("PRODUCTO", data);
      if (data) {
        this.router.navigateByUrl('/productosCatalogo');
      } else {
        console.log("error");
      }
    });
  }
  seleccionarColor(color: string) {
    if (this.coloresSeleccionados.includes(color)) {
      // Si el color ya está seleccionado, lo remueve
      this.coloresSeleccionados = this.coloresSeleccionados.filter(c => c !== color);
    } else {
      // Si el color no está seleccionado, lo agrega si no se han seleccionado 3
      if (this.coloresSeleccionados.length < 3) {
        this.coloresSeleccionados.push(color);
      }
    }
  }

}
