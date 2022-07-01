import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { TextBox } from 'smart-webcomponents-angular';
import { BusService } from '../bus.service';
import { Station } from '../station';
import { StationService } from '../station.service';
import { debounceTime } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Bus } from '../bus';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fromId :number=0;
  toId  :number=0;
  allBuses= [];
  stationNames:any;
  stationsList: any[]=[];
  
  fromToForm=new FormGroup({
    fromLocation:new FormControl('',[Validators.required]),
    toLocation:new FormControl('',[Validators.required]),
    arrivalDateTime:new FormControl('',[Validators.required])
  })


  constructor(private stationService:StationService,private busService:BusService,private router:Router,private datePipe:DatePipe) {


   }

  ngOnInit(): void {

   this.stationService.getAllStationNames().subscribe((data)=>{
    this.stationNames=data
   })

   this.busService.getAllBusesStations().subscribe((data) => {
    this.allBuses = data})

   

  }


  searchbuses(){
    console.log(this.arrivalDateTime?.value)
    const resultBuses:any[] = [];
    this.allBuses.forEach((bus: any)=>{
      const resultSet: boolean[]=[];
      const val:number=0;
      const dateResult = this.datePipe.transform(bus.arrivalDateTime, 'yyyy-MM-dd')==this.arrivalDateTime?.value;
      // console.log(this.datePipe.transform(bus.arrivalDateTime, 'yyyy-MM-dd'));
      // console.log(bus.arrivalDateTime | this.date:"yyyy-mm-dd");
      if(dateResult==true){
        bus.busStations.forEach((e:Station)=>{
          const fromResult = e.stationName===this.fromLocation?.value;
          const toResult= e.stationName===this.toLocation?.value;
          // const dateResult = this.datePipe.transform(bus.arrivalDateTime, 'yyyy-MM-dd')==this.arrivalDateTime?.value;
          console.log(dateResult)
          if (fromResult==true || toResult==true){
            resultSet.push(true)
          }
  
        })
      }

      if(resultSet.length==2){
        resultBuses.push(bus);
        console.log(bus)
        this.router.navigate(['/bus-label'])
      }

    })
    this.busService.ResultList=resultBuses;

  }

  get fromLocation(){
    return this.fromToForm.get('fromLocation');
  }
  
  get toLocation(){
    return this.fromToForm.get('toLocation');
  }
  get arrivalDateTime(){
    return this.fromToForm.get('arrivalDateTime');
  }
  

}
