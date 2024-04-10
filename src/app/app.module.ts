import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavegacionModule }  from './navegacion/navegacion.module';
import { ProductostupperModule } from './prodcutostupper/prodcutostupper.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { BuscarMarcaComponent } from './Marca/buscar-marca/buscar-marca.component';
import { NuevaMarcaComponent } from './Marca/nueva-marca/nueva-marca.component';
import { CatalogoMarcasComponent } from './Marca/catalogo-marcas/catalogo-marcas.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActualizarMarcaComponent } from './Marca/actualizar/actualizar.component';
import { UsuarioModule } from './usuario/usuario.module';
import { EmpleadoModule } from './empleado/empleado.module';


@NgModule({
  declarations: [
    AppComponent,
    BuscarMarcaComponent,
    NuevaMarcaComponent,
    CatalogoMarcasComponent,
    ActualizarMarcaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacionModule,
    ProductostupperModule,
    ProveedoresModule,
    UsuarioModule,
    EmpleadoModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
