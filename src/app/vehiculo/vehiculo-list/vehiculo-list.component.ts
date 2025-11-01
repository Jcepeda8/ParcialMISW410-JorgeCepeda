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

  get conteoPorMarca(): { [marca: string]: number } {
    const acc: { [marca: string]: number } = {};
    for (const v of this.vehiculos) {
      const m = (v.marca ?? '').trim();
      if (!m) continue;
      acc[m] = (acc[m] ?? 0) + 1;
    }
    return acc;
  }
  
}
