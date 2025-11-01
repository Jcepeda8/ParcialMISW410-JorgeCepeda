/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoListComponent ],
      providers: [VehiculoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;
    component.vehiculos = [];
    for (let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo(
        faker.number.int({ min: 1, max: 5 }),
        faker.lorem.words(1),
        faker.lorem.words(1),
        faker.lorem.words(1),
        faker.number.int({ min: 2000, max: 2023 }),
        faker.number.int({ min: 80000, max: 90000 }),
        faker.lorem.words(1),
        faker.image.url(),
      );
      component.vehiculos.push(vehiculo);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table with 1 header row and 3 body rows', () => {
    const table = debug.query(By.css('table'));
    expect(table).toBeTruthy();
    const theadRows = fixture.nativeElement.querySelectorAll('thead tr');
    expect(theadRows.length).toBe(1);
    const bodyRows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(bodyRows.length).toBe(3);
  });

  it('should have exactly 3 vehicles in component data', () => {
    expect(component.vehiculos.length).toBe(3);
  });

}); 
