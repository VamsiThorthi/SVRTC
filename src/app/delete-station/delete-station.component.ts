import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { CreatedSuccessfullyComponent } from '../created-successfully/created-successfully.component';
import { StationService } from '../station.service';

@Component({
  selector: 'app-delete-station',
  templateUrl: './delete-station.component.html',
  styleUrls: ['./delete-station.component.css']
})
export class DeleteStationComponent implements OnInit {
  districts=["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhoopalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal (Rural)","Warangal (Urban)","Yadadri Bhuvanagiri"] 

  errorMsg: any;
  busId: number;
  station:any;
  

  constructor(private router:Router, @Inject(MAT_DIALOG_DATA) public data:any,private busService:BusService,private stationService:StationService,private dialog:MatDialog) {this.busId = this.data.busId}

  ngOnInit(): void {  
    
  }

  stationForm=new FormGroup({
    stationName:new FormControl('',[Validators.required]),
    stationDistrict:new FormControl('',[Validators.required]),
    
  }
  )
  onback(){
    window.location.reload()
  }

  // onSubmit(){
  //   console.warn(this.stationForm.value);
  //   this.stationService.createStationDetails(this.stationForm.value).subscribe(
  //     data => {this.data = true, window.location.reload();},
  //     err  => (this.errorMsg = <any>err.error,
  //             this.data=false))
  // }
  get stationName(){
    return this.stationForm.get('stationName');
  }
  get stationDistrict(){
    return this.stationForm.get('stationDistrict');
  }
  get addStation(){
    return this.stationForm.get('addStation');
  }
  
  openDialog() {
    alert("deleted successfully")
    window.location.reload();
  }
  collection() {
    console.warn(this.stationForm.value);
    console.log(this.busId,"busId");
    console.log(this.stationName?.value,"stationNAme");
    console.log(this.stationDistrict?.value,"stationDistrict");
    console.log(this.addStation?.value,"index value")
    
    this.stationService.getStationByNameAndDistrict(this.stationName?.value,this.stationDistrict?.value).subscribe((data2)=>{
      this.station=data2;
      console.log(data2);
      this.busService.createBusStation(this.station, this.addStation?.value, this.busId).subscribe((data1) => {
        console.log(data1, "result");
      })
      
    })
    
  }
}
