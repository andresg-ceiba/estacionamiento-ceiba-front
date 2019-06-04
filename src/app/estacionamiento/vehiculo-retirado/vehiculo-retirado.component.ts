import { Component, Input, OnInit } from '@angular/core';

import Vehiculo from '../model/vehicle-model';

@Component({
  selector: 'app-vehiculo-retirado',
  templateUrl: './vehiculo-retirado.component.html',
  styleUrls: ['./vehiculo-retirado.component.sass']
})
export class VehiculoRetiradoComponent implements OnInit {
  @Input()
  vehiculoRetirado: Vehiculo;

  constructor() {}

  ngOnInit() {}
}
