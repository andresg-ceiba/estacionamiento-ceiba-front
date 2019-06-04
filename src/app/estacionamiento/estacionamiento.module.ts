import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EstacionamientoService } from './estacionamienot.service';
import { EstacionamientoComponent } from './estacionamiento.component';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';

@NgModule({
  declarations: [EstacionamientoComponent, ListaVehiculosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSortModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [EstacionamientoService],
  exports: [EstacionamientoComponent]
})
export class EstacionamientoModule {}
