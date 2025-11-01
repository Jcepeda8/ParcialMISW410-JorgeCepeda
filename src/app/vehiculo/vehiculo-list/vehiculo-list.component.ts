import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) { }
  vehiculos: Array<Vehiculo> = [];
  getVehiculos() {
    this.vehiculoService.getVehiculos().subscribe(Vehiculos => {
      this.vehiculos = Vehiculos;
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
