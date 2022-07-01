import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { Dialog } from 'smart-webcomponents-angular';
import { CreatedSuccessfullyComponent } from '../created-successfully/created-successfully.component';
import { StationService } from '../station.service';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {

  districts=["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhoopalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal (Rural)","Warangal (Urban)","Yadadri Bhuvanagiri"] 
  data=false;
  errorMsg: any;

  constructor(private stationService: StationService,
    private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  stationForm=new FormGroup({
    stationName:new FormControl('',[Validators.required]),
    stationDistrict:new FormControl('',[Validators.required]),
    Buses:new FormControl('',[Validators.required]),
  }
  )

  onSubmit(){
    console.warn(this.stationForm.value);
    this.stationService.createStationDetails(this.stationForm.value).subscribe(
      data => {this.data = true, window.location.reload();},
      err  => (this.errorMsg = <any>err.error,
              this.data=false))
  }
  get stationName(){
    return this.stationForm.get('stationName');
  }
  get stationDistrict(){
    return this.stationForm.get('stationDistrict');
  }
  get Buses(){
    return this.stationForm.get('Buses');
  }
  openDialog() {
    alert("added successfully")
    window.location.reload();
  }
}
