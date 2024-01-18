import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { DriverComponent } from './driver/driver.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'map',
    pathMatch:'full'
  },{
    path:'map',
    component:MapComponent
  },
  {
    path:'driver',
    component:DriverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindRoutingModule { }
