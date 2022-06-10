import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AddStationComponent } from './add-station/add-station.component';
import { BusStationComponent } from './bus-station/bus-station.component';
import { FromtoComponent } from './fromto/fromto.component';
import { LabellingComponent } from './labelling/labelling.component';


const routes: Routes = [
  {path: 'addBus',component:AddBusComponent},
  {path: 'addStation',component:AddStationComponent},
  {path: 'fromTo',component:FromtoComponent},
  {path: 'deptlogin',component:LabellingComponent},
  {path: 'busStation',component:BusStationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
