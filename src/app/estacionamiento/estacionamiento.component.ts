import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EstacionamientoService } from './estacionamienot.service';
import Vehiculo from './model/vehicle-model';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.sass']
})
export class EstacionamientoComponent implements OnInit {
  vehiculosIngresados: Array<Vehiculo>;

  constructor(private service: EstacionamientoService) {}

  ngOnInit() {
    console.log('on init');

    this.consultarTodosLosVehiculos();
  }

  private consultarTodosLosVehiculos() {
    this.service
      .consultarVehiculos()
      .pipe(tap(vehiculos => (this.vehiculosIngresados = vehiculos)))
      .subscribe();
  }
}
