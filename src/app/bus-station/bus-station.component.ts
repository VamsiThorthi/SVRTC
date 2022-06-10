import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BusService } from '../bus.service';
import { Station } from '../station';
import { StationService } from '../station.service';


@Component({
  selector: 'app-bus-station',
  templateUrl: './bus-station.component.html',
  styleUrls: ['./bus-station.component.css']
})
export class BusStationComponent implements OnInit {
  errorValue: String='';
  successValue:String='';
  busArray=<any>[];
  stationDistricts!:any;
  stationList: Array<Station> = [];
  stationNames: any;

  constructor(private busService:BusService,private stationService:StationService) { }

  ngOnInit(): void {  
    this.stationService.getStationDetails().subscribe((data)=>{
      console.log(data)
      this.stationNames = data
    })

  }

  busStageForm= new FormGroup({
    busNo:new FormControl("",[Validators.required]),
    stages:new FormControl("",Validators.required)
  })

  addBusStages(){
    console.log(this.busStageForm.value);
    this.busService.getBusByBusNo(this.busNo?.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.successValue="success";
        for (let index = 0; index < this.stages?.value; index++) {
          // const element = array[index];
          this.busArray.push(index);
        }
      },
      e => {
        console.log(e)
        this.errorValue=e.error;
        this.successValue="error";
      }

    )
    
  }

  findStationDistrict(event:any){
    this.stationService.getStationByName(event.target.value).subscribe(
      (data)=>{
       this.stationDistricts = data
     }
    )
    console.log(this.stationList);
  }

  addStationFrom=new FormGroup({
    stationName:new FormControl('',[Validators.required]),
    stationDistrict:new FormControl('',[Validators.required])
    // arrivalDateTime:new FormControl('',[Validators.required]),
    // departureDateTime:new FormControl('',[Validators.required]) 
  })

  onSaveStation(){
    console.log(this.addStationFrom.value)
    //JSON.parse(JSON.stringify(this.addStationFrom.value))
    this.busService.setStationToBus(this.addStationFrom.value,this.busNo?.value).subscribe(
      (data:any)=>{
        console.log(data);
      },
      e => {
        console.log(e.error)
      }
    )
  }




  get busNo(){
    return this.busStageForm.get("busNo");
  }

  get stages(){
    return this.busStageForm.get("stages");
  }

  get stationName(){
    return this.addStationFrom.get("stationName");
  }

  get stationDistrict(){
    return this.addStationFrom.get("stationDistrict");
  }

  get arrivalDateTime(){
    return this.addStationFrom.get("arrivalDateTime");
  }
  get departureDateTime(){
    return this.addStationFrom.get("departureDateTime");
  }



}
