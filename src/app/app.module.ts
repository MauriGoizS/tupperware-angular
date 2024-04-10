import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavegacionModule }  from './navegacion/navegacion.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuarioModule } from './usuario/usuario.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { ClienteModule } from './cliente/cliente.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { CarritoModule } from './carrito/carrito.module';
import { MarcasModule } from './Marca/marcas.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacionModule,
    ProveedoresModule,
    UsuarioModule,
    CarritoModule,
    MarcasModule,
    EmpleadoModule,
    ClienteModule,
    DepartamentoModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
