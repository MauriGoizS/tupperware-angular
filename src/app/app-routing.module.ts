import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuevoProductoComponent } from './prodcutostupper/nuevo-producto/nuevo-producto.component';
import { BuscarProductosComponent } from './prodcutostupper/buscar-productos/buscar-productos.component';
import { CatalogoProductosComponent } from './prodcutostupper/catalogo-productos/catalogo-productos.component';


import { NuevaMarcaComponent } from './Marca/nueva-marca/nueva-marca.component';
import { BuscarMarcaComponent } from './Marca/buscar-marca/buscar-marca.component';
import { CatalogoMarcasComponent } from './Marca/catalogo-marcas/catalogo-marcas.component';

import { NuevoProveedorComponent } from './proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { BuscarProveedorComponent } from './proveedores/buscar-proveedor/buscar-proveedor.component';
import { CatalogoProveedoresComponent } from './proveedores/catalogo-proveedores/catalogo-proveedores.component';
import { EliminarComponent } from './prodcutostupper/eliminar/eliminar.component';
import { ActualizarComponent } from './prodcutostupper/actualizar/actualizar.component';
import { EliminarComponentProveedor } from './proveedores/eliminar/eliminar.component';
import { ActualizarComponentProveedor } from './proveedores/actualizar/actualizar.component';
import { EliminarMarcaComponent } from './Marca/eliminar/eliminar.component';
import { ActualizarMarcaComponent } from './Marca/actualizar/actualizar.component';
import { ViewCarritoComponent } from './carrito/view-carrito/view-carrito.component';
import { VerProductoComponent } from './prodcutostupper/ver-producto/ver-producto.component';

const routes: Routes = [
  // Rutas de Productos
  {
    path: 'productosCatalogo',
    component: CatalogoProductosComponent
  },
  {
    path: 'NuevoProducto',
    component: NuevoProductoComponent
  },
  {
    path: 'BuscarProducto',
    component: BuscarProductosComponent
  },
  {
    path: 'productoseliminar/:id',
    component: EliminarComponent
  }
  ,
  {
    path: 'productosactualizar/:id',
    component: ActualizarComponent
  },
  {
    path: 'ver-producto/:id',
    component: VerProductoComponent
  },
  // Rutas de Marcas
  {
    path: 'NuevaMarca',
    component: NuevaMarcaComponent
  },
  {
    path: 'BuscarMarca',
    component: BuscarMarcaComponent
  },
  {
    path: 'marcaeliminar/:id',
    component: EliminarMarcaComponent
  },
  {
    path: 'marcaactualizar/:id',
    component: ActualizarMarcaComponent
  },
  {
    path: 'CatalogoMarca',
    component: CatalogoMarcasComponent
  },
  // Rutas de proveedores
  {
    path: 'BuscarProveedor',
    component: BuscarProveedorComponent
  },
  {
    path: 'NuevoProveedor',
    component: NuevoProveedorComponent
  },
  {
    path: 'CatalogoProveedor',
    component: CatalogoProveedoresComponent
  },
  {
    path: 'proveedoreliminar/:id',
    component: EliminarComponentProveedor
  },
  {
    path: 'proveedoractualizar/:id',
    component: ActualizarComponentProveedor
  },
  // CARRITO
  {
    path: 'carrito',
    component: ViewCarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
