import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap } from 'rxjs/operators';

import { EstacionamientoService } from './estacionamiento.service';
import RegistroVehiculo from './model/registro-vehiculo.model';
import Vehiculo from './model/vehicle-model';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.sass']
})
export class EstacionamientoComponent implements OnInit {
  consultandoVehiculos: boolean;
  vehiculosIngresados: Array<Vehiculo>;
  vehiculoRetirado: Vehiculo;

  constructor(
    private service: EstacionamientoService,
    private snackBarService: MatSnackBar
  ) {}

  ngOnInit() {
    this.consultarTodosLosVehiculos();
  }

  private consultarTodosLosVehiculos() {
    this.consultandoVehiculos = true;
    this.vehiculosIngresados = [];
    this.service
      .consultarVehiculos()
      .pipe(
        tap(vehiculos => {
          this.vehiculosIngresados = vehiculos;
          this.consultandoVehiculos = false;
        }),
        catchError(error => [(this.consultandoVehiculos = false)])
      )
      .subscribe();
  }

  ingresarVehiculo(registro: RegistroVehiculo) {
    this.service
      .registrarVehiculo(registro)
      .pipe(
        tap(_ => {
          this.snackBarService.open('Vehiculo ingresado', 'Exito', {
            duration: 5000
          });
          this.consultarTodosLosVehiculos();
        }),
        catchError(error => [
          this.snackBarService.open(error.error, 'Error', {
            duration: 5000
          })
        ])
      )
      .subscribe();
  }

  retirarVehiculo(placa: string) {
    this.vehiculoRetirado = null;
    this.service
      .retirarvehiculo(placa)
      .pipe(
        tap(vehiculoRetirado => {
          this.snackBarService.open('Vehiculo retirado', 'Exito', {
            duration: 5000
          });
          this.consultarTodosLosVehiculos();
          this.vehiculoRetirado = vehiculoRetirado;
        }),
        catchError(error => [
          this.snackBarService.open(error.error, 'Error', {
            duration: 5000
          })
        ])
      )
      .subscribe();
  }
}
