import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private busUrl="http://localhost:8080/busDetails";

  ResultList: any;

  constructor(private http:HttpClient) { 

    console.log(this.ResultList)
  }


  createBusDetails(bus:Bus):Observable<any>{
    return this.http.post<any>(`${this.busUrl}/addBus`,bus);
  }

  setStationToBus(Station:any,busNo:String):Observable<any>{ 
    return this.http.put<any>(`${this.busUrl}/setStations/${busNo}`,Station);
  }
  
  getBusByBusNo(busNo:String):Observable<any>{
    return this.http.get<any>(`${this.busUrl}/getBusByBusNo//${busNo}`);
  }

  getBusesByFromAndTo(from:number,to:number):Observable<any>{
    return this.http.get<any>(`${this.busUrl}/getBusesByFromTo/${from}/${to}`);
  }

  getAllBusesStations():Observable<any>{
    return this.http.get<any>(`${this.busUrl}/getAllbuses`);
  }
 
}
