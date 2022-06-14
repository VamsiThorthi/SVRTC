import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fromId :number=0;
  toId  :number=0;
  allBuses= [];
  
  stationsList: any[]=[];

  constructor(private stationService:StationService,private busService:BusService,private router:Router) {
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
        resultBuses.push(bus);
        this.router.navigate(['/bus-label'])
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
