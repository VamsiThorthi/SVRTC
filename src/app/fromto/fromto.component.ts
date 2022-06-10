import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { async } from 'rxjs';
import { BusService } from '../bus.service';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-fromto',
  templateUrl: './fromto.component.html',
  styleUrls: ['./fromto.component.css']
})
export class FromtoComponent implements OnInit {
  fromId :number=0;
  toId  :number=0;
  allBuses= [];
  
  stationsList: any[]=[];

  constructor(private stationService:StationService,private busService:BusService) {
    this.getAllBuses();
    
   }

  ngOnInit(): void {
    
  }

  fromToForm=new FormGroup({
    fromLocation:new FormControl('',[Validators.required]),
    toLocation:new FormControl('',[Validators.required])
  })

  getAllBuses(){
    this.busService.getAllBusesStations().subscribe((data) => {
      this.allBuses = data})
  }


  searchbuses(){
    const resultBuses:any[] = [];
    this.allBuses.forEach((bus: any)=>{
      const resultSet: boolean[]=[];

      bus.busStations.forEach((e:Station)=>{
        const fromResult = e.stationName===this.fromLocation?.value
        const toResult= e.stationName===this.toLocation?.value
       
        if (fromResult==true || toResult==true){
          resultSet.push(true)
        }
       
      })

      if(resultSet.length==2){
        resultBuses.push(bus)
      }
    })
    this.busService.ResultList=resultBuses
  console.log(resultBuses)
  }

  get fromLocation(){
    return this.fromToForm.get('fromLocation');
  }

  get toLocation(){
    return this.fromToForm.get('toLocation');
  }

}
