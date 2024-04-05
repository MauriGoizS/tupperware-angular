import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  
import { CatalogoMarcasComponent } from './catalogo-marcas/catalogo-marcas.component';
import { BuscarMarcaComponent } from './buscar-marca/buscar-marca.component';
import { NuevaMarcaComponent } from './nueva-marca/nueva-marca.component';
import { ActualizarMarcaComponent } from './actualizar/actualizar.component';
import { EliminarMarcaComponent } from './eliminar/eliminar.component';
import { FormsModule } from '@angular/forms';




@NgModule({
declarations: [
    CatalogoMarcasComponent,
    BuscarMarcaComponent,
    NuevaMarcaComponent,
    ActualizarMarcaComponent,
    EliminarMarcaComponent,
    
],
imports: [
    CommonModule,
    FormsModule,
    RouterModule
]
})
export class MarcasModule{ }
