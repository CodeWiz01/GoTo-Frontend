import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindRoutingModule } from './find-routing.module';
import { FindComponent } from './find.component';
import { MapComponent } from './map/map.component';
import { DriverComponent } from './driver/driver.component';


@NgModule({
  declarations: [
    FindComponent,
    MapComponent,
    DriverComponent
  ],
  imports: [
    CommonModule,
    FindRoutingModule
  ]
})
export class FindModule { }
