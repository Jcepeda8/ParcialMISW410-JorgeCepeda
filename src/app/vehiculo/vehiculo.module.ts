import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';  

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehiculoListComponent],
  exports: [VehiculoListComponent]
})
export class VehiculoModule { }
