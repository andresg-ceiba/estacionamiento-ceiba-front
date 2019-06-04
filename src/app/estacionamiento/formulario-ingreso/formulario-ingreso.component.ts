import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

import RegistroVehiculo from '../model/registro-vehiculo.model';
import TipoVehiculo from '../model/tipo-vehiculo';

@Component({
  selector: 'app-formulario-ingreso',
  templateUrl: './formulario-ingreso.component.html',
  styleUrls: ['./formulario-ingreso.component.sass']
})
export class FormularioIngresoComponent implements OnInit {
  formularioIngreso: FormGroup;
  tiposVehiculo: Array<string> = TipoVehiculo;

  @Output()
  ingresarVehiculo = new EventEmitter<RegistroVehiculo>();

  constructor(private fb: FormBuilder) {
    this.formularioIngreso = this.fb.group({
      tipoVehiculo: [
        '',
        [
          Validators.required,
          RxwebValidators.oneOf({ matchValues: TipoVehiculo })
        ]
      ],
      placa: ['', Validators.required],
      cilindraje: ['', RxwebValidators.digit()]
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.ingresarVehiculo.emit(this.formularioIngreso.value);
  }
}
