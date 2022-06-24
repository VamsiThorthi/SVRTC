import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AddStationComponent } from './add-station/add-station.component';
import { BusStationComponent } from './bus-station/bus-station.component';
import { FromtoComponent } from './fromto/fromto.component';
import { HomeComponent } from './home/home.component';
import { IntermediatestationsComponent } from './intermediatestations/intermediatestations.component';
import { LabellingComponent } from './labelling/labelling.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path: 'addBus',component:AddBusComponent},
  {path: 'addStation',component:AddStationComponent},
  {path: 'fromTo',component:FromtoComponent},
  {path: 'bus-label',component:LabellingComponent},
  {path: 'busStation',component:BusStationComponent},
  {path: 'login',component:LoginPageComponent},
  {path: 'signUp',component:SignupComponent},
  {path: 'next',component:IntermediatestationsComponent},
  {path: '',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
