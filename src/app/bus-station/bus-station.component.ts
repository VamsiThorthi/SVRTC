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
  listOfLists=<any>[];
  buttondisabled=false;
  busStationArray=<any>[];
  stationDistricts!:any;
  stationList: Array<Station> = [];
  stationNames: any;
  editdisabled=true;
  

  constructor(private busService:BusService,private stationService:StationService,private router:Router) { }

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
          this.busArray.push(index);
        }
        this.busStageForm.disable();
        this.buttondisabled=true;
        this.editdisabled=false;
      },
      e => {
        console.log(e)
        this.errorValue=e.error;
        this.successValue="error";
      }

    )
    
  }

 

  findStationDistrict(event:any,index:number){
    console.log(event.target.value)
    this.stationService.getStationByName(event.target.value).subscribe(
      
      (data)=>{
        console.log(data)
       this.stationDistricts = data
     this.listOfLists[index]=data;
       console.log(this.listOfLists)
     }
    )
    console.log(this.stationList);
  }

  addStationFrom=new FormGroup({
    stationName:new FormControl('',[Validators.required]),
    stationDistrict:new FormControl('',[Validators.required])
   
  })

  setStations(i:number){
    this.busStationArray[i]=this.addStationFrom.value;
    console.log(this.busStationArray)
  }
  saveStationDistricts(){
    console.log(this.addStationFrom.value)
    this.busService.setStationToBus(this.addStationFrom.value,this.busNo?.value).subscribe(
      (data:any)=>{
        console.log(data);

       
      },
      e => {
        console.log(e.error)
      }
    )
  }

  onSaveStation(){
    console.log(this.addStationFrom.value,"abcedefdfdsf")
    this.busStationArray.push(this.addStationFrom.value)    
  }


  saveBusstations(){
    console.log(this.busStationArray,"abcd")
    this.busStationArray.forEach((element:any) => {
      this.stationService.getStationByNameAndDistrict(element.stationName,element.stationDistrict).subscribe(
        {
          next :(data:any)=>{
            console.log(data,"getStationByNameAndDistrict");
            console.log(this.busNo?.value);
            this.busService.setStationToBus(data,this.busNo?.value).subscribe
            ((data)=>{
              console.log(data)
            });
            
          } 
        }
      )
    });
    this.router.navigate(['/busTable'])
    
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
