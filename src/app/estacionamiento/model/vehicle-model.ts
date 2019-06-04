import TipoVehiculo from './tipo-vehiculo';

class Vehiculo {
  placa: string;
  tipo: TipoVehiculo;
  horaIngreso: Date;
  cilindraje: number;
  horaSalida: Date;
  costoEstacionamiento: number;
}

export default Vehiculo;
