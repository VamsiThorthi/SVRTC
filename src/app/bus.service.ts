import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './bus';
import { Station } from './station';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private busUrl="http://localhost:8080/busDetails";

  ResultList: any;
  

  constructor(private http:HttpClient) { 

    
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
  deleteBusById(id:number):Observable<any>{
    return this.http.delete<any>(`${this.busUrl}/deleteBusById/${id}`);
  }
  updateBus(id:number,bus:Bus):Observable<any>{
    return this.http.put(`${this.busUrl}/updateBus/${id}`,bus)
  }
  getBusById(id: number): Observable<any>{
    return this.http.get(`${this.busUrl}/getBusById/${id}`)
  }
  updateBusStation(station:Station,index:number,busId:number):Observable<any>{
    console.log(index);
    return this.http.put(`${this.busUrl}/updateBusStation/${index}/${busId}`, station)
  }

  createBusStation(station:Station,index:number,busId:number):Observable<any>{
    return this.http.post<any>(`${this.busUrl}/addBusStation/${index}/${busId}`,station);
  }

}
