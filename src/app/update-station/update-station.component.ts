import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StationService } from '../station.service';
import { UpdatedSuccessfullyComponent } from '../updated-successfully/updated-successfully.component';


@Component({
  selector: 'app-update-station',
  templateUrl: './update-station.component.html',
  styleUrls: ['./update-station.component.css']
})
export class UpdateStationComponent implements OnInit {
  districts=["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhoopalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal (Rural)","Warangal (Urban)","Yadadri Bhuvanagiri"] 
  stationId:number
  constructor(public dialog: MatDialog,  @Inject(MAT_DIALOG_DATA) public data:any, private activatedRouter:ActivatedRoute,private stationService:StationService) {
    this.stationId = this.data.stationId
   }


  ngOnInit(): void {
    console.warn(this.activatedRouter.snapshot.params['id']);
    this.stationService.getStationById(this.stationId).subscribe((data)=>{
      console.log(data,"output");
      this.editStationForm=new FormGroup({
        stationName:new FormControl(data['stationName']),
        stationDistrict:new FormControl(data['stationDistrict'])
      }
      )
    })
  }

  // updateStation(){
  //   this.stationService.getStationById(this.stationId).subscribe((data)=>{
  //       console.log(data,"output");
  //       this.editStationForm=new FormGroup({
  //         stationName:new FormControl(data['stationName']),
  //         stationDistrict:new FormControl(data['stationDistrict'])
  //       }
  //       )
  // }
  editStationForm=new FormGroup({
    stationName:new FormControl('',[Validators.required]),
    stationDistrict:new FormControl('',[Validators.required]),
    Buses:new FormControl('',[Validators.required]),
  }
  )
  onback(){
    window.location.reload();
  }
  get stationName(){
    return this.editStationForm.get('stationName');
  }
  get stationDistrict(){
    return this.editStationForm.get('stationDistrict');
  }
  

  collection(){
    console.warn(this.editStationForm.value);
    this.stationService.updateStation(this.stationId,this.editStationForm.value).subscribe((data)=>{
      console.log(data,"result");
      
      
    })
  }
  openDialog() {
    this.dialog.open(UpdatedSuccessfullyComponent);
  }

}
