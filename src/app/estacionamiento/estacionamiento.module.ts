import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { EstacionamientoService } from './estacionamiento.service';
import { EstacionamientoComponent } from './estacionamiento.component';
import { FormularioIngresoComponent } from './formulario-ingreso/formulario-ingreso.component';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';
import { VehiculoRetiradoComponent } from './vehiculo-retirado/vehiculo-retirado.component';

@NgModule({
  declarations: [
    EstacionamientoComponent,
    ListaVehiculosComponent,
    FormularioIngresoComponent,
    VehiculoRetiradoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [EstacionamientoService],
  exports: [EstacionamientoComponent]
})
export class EstacionamientoModule {}
