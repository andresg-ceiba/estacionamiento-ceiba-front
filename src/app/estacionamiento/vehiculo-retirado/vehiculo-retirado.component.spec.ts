import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoRetiradoComponent } from './vehiculo-retirado.component';

describe('VehiculoRetiradoComponent', () => {
  let component: VehiculoRetiradoComponent;
  let fixture: ComponentFixture<VehiculoRetiradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoRetiradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoRetiradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
