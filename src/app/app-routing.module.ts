import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AddStationComponent } from './add-station/add-station.component';
import { BusStationComponent } from './bus-station/bus-station.component';
import { BusestableComponent } from './busestable/busestable.component';
import { DeptHomeComponent } from './dept-home/dept-home.component';

import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { IntermediatestationsComponent } from './intermediatestations/intermediatestations.component';
import { LabellingComponent } from './labelling/labelling.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import { TableOverviewExampleComponent } from './table-overview-example/table-overview-example.component';
import { UpdateBusStationsComponent } from './update-bus-stations/update-bus-stations.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { UpdateStationComponent } from './update-station/update-station.component';



const routes: Routes = [
  {path: 'addBus',component:AddBusComponent},
  {path: 'addStation',component:AddStationComponent},
  {path: 'stationTable',component:TableOverviewExampleComponent},
  {path: 'busTable',component:BusestableComponent},
  {path: 'bus-label',component:LabellingComponent},
  {path: 'busStation',component:BusStationComponent},
  {path: 'login',component:LoginPageComponent},
  {path: 'signUp',component:SignupComponent},
  {path: 'next',component:IntermediatestationsComponent},
  {path: 'dept-home',component:DeptHomeComponent},
  {path: 'updateStation/:id',component:UpdateStationComponent},
  {path: 'updateBus/:id',component:UpdateBusComponent},
  {path:'hai', component:UpdateBusStationsComponent},
  {path:'home2', component:Home2Component},
  {path: '',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
