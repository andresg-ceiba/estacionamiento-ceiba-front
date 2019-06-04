import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import Vehiculo from '../model/vehicle-model';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.sass']
})
export class ListaVehiculosComponent {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input()
  set vehiculos(value: Array<Vehiculo>) {
    if (value) {
      this.displayingVehicles = new MatTableDataSource(value);
      this.displayingVehicles.sort = this.sort;
    }
  }

  @Input()
  consultandoVehiculos: boolean;

  @Output()
  retirarVehiculo = new EventEmitter<string>();

  displayingVehicles: MatTableDataSource<Vehiculo>;

  displayedColumns = ['tipo', 'placa', 'horaIngreso', 'cilindraje', 'acciones'];

  applyFilter(filterValue: string) {
    this.displayingVehicles.filter = filterValue.trim().toLowerCase();
  }

  onRetirarVehicuo(placa: string) {
    this.retirarVehiculo.emit(placa);
  }
}
