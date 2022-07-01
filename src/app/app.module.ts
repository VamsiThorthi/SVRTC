import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddStationComponent } from './add-station/add-station.component';
import { BusStationComponent } from './bus-station/bus-station.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AllListComponent } from './all-list/all-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { LabellingComponent } from './labelling/labelling.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './signup/signup.component';
import { MatSelectModule } from '@angular/material/select';
import { IntermediatestationsComponent } from './intermediatestations/intermediatestations.component';
import { DeptHomeComponent } from './dept-home/dept-home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatCellDef, MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TableOverviewExampleComponent } from './table-overview-example/table-overview-example.component';
import { UpdateStationComponent } from './update-station/update-station.component';
import { BusestableComponent } from './busestable/busestable.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { DeleteDialogueComponent } from './delete-dialogue/delete-dialogue.component';
import { UpdatedSuccessfullyComponent } from './updated-successfully/updated-successfully.component';
import { UpdateBusStationsComponent } from './update-bus-stations/update-bus-stations.component';
import { CreatedSuccessfullyComponent } from './created-successfully/created-successfully.component';
import { DatePipe } from '@angular/common';
import { CreateStationComponent } from './create-station/create-station.component';
import { DeleteStationComponent } from './delete-station/delete-station.component';
import { Home2Component } from './home2/home2.component';



@NgModule({
  declarations: [
    AppComponent,
    AddBusComponent,
    NavbarComponent,
    AddStationComponent,
    BusStationComponent,
    AllListComponent,
    LabellingComponent,
    LoginPageComponent,
    HomeComponent,
    SignupComponent,
    IntermediatestationsComponent,
    DeptHomeComponent,
    TableOverviewExampleComponent,
    UpdateStationComponent,
    BusestableComponent,
    UpdateBusComponent,
    DeleteDialogueComponent,
    UpdatedSuccessfullyComponent,
    UpdateBusStationsComponent,
    CreatedSuccessfullyComponent,
    CreateStationComponent,
    DeleteStationComponent,
    Home2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatToolbarModule, MatSelectModule,MDBBootstrapModule.forRoot(),MatTableModule,MatPaginatorModule
  ],
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
