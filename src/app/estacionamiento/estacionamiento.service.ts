import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import RegistroVehiculo from './model/registro-vehiculo.model';
import Vehiculo from './model/vehicle-model';

@Injectable()
export class EstacionamientoService {
  constructor(private httpclient: HttpClient) {}

  public consultarVehiculos(): Observable<Array<Vehiculo>> {
    return this.httpclient.get<Array<Vehiculo>>(
      `${environment.service.baseUrl}${environment.service.consultarVehiculos}`
    );
  }

  public registrarVehiculo(registro: RegistroVehiculo): Observable<Vehiculo> {
    return this.httpclient.post<Vehiculo>(
      `${environment.service.baseUrl}${environment.service.registrarVehiculo}`,
      registro
    );
  }

  public retirarvehiculo(placa: string) {
    return this.httpclient.post<Vehiculo>(
      `${
        environment.service.baseUrl
      }${environment.service.retirarVehiculo.replace('{placa}', placa)}`,
      null
    );
  }
}
