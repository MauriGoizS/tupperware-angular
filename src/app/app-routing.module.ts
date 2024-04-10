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

import { NuevoUsuarioComponent } from './usuario/nuevo-usuario/nuevo-usuario.component';
import { ActualizarUsuarioComponent } from './usuario/actualizar-usuario/actualizar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { CatalogoUsuarioComponent } from './usuario/catalogo-usuario/catalogo-usuario.component';
import { BuscarCarritoComponent } from './carrito/buscar-carrito/buscar-carrito.component';

import { NuevoEmpleadoComponent } from './empleado/nuevo-empleado/nuevo-empleado.component';
import { ActualizarEmpleadoComponent } from './empleado/actualizar-empleado/actualizar-empleado.component';
import { EliminarEmpleadoComponent } from './empleado/eliminar-empleado/eliminar-empleado.component';
import { CatalogoEmpleadoComponent } from './empleado/catalogo-empleado/catalogo-empleado.component';

import { NuevoClienteComponent } from './cliente/nuevo-cliente/nuevo-cliente.component';
import { ActualizarClienteComponent } from './cliente/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { CatalogoClienteComponent } from './cliente/catalogo-cliente/catalogo-cliente.component';

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
  // Rutas de Usuario
  {
    path: 'catalogo-usuario',
    component: CatalogoUsuarioComponent
  },
  {
    path: 'actualizar-usuario/:id',
    component: ActualizarUsuarioComponent
  },
  {
    path: 'eliminar-usuario/:id',
    component: EliminarUsuarioComponent
  },
  {
    path: 'nuevo-usuario',
    component: NuevoUsuarioComponent
  },
  // Rutas de Empleado
  {
    path: 'catalogo-empleado',
    component: CatalogoEmpleadoComponent
  },
  {
    path: 'actualizar-empleado/:id',
    component: ActualizarEmpleadoComponent
  },
  {
    path: 'eliminar-empleado/:id',
    component: EliminarEmpleadoComponent
  },
  {
    path: 'nuevo-empleado',
    component: NuevoEmpleadoComponent
  },
  // Rutas de Cliente
  {
    path: 'catalogo-cliente',
    component: CatalogoClienteComponent
  },
  {
    path: 'actualizar-cliente/:id',
    component: ActualizarClienteComponent
  },
  {
    path: 'eliminar-cliente/:id',
    component: EliminarClienteComponent
  },
  {
    path: 'nuevo-cliente',
    component: NuevoClienteComponent
  },
  // CARRITO
  {
    path: 'carrito',
    component: ViewCarritoComponent
  },
  {
    path: 'buscar-carrito',
    component: BuscarCarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
