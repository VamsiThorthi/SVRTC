import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from './station';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  private stationUrl="http://localhost:8080/stationDetails";

  constructor(private http:HttpClient) { }

  createStationDetails(station:Station):Observable<any>{
    return this.http.post<any>(`${this.stationUrl}/addStation`,station);
  }

  getStationDetails(){
    return this.http.get(`${this.stationUrl}/getAllStationDetails`);
  }

  getStationById(id: number): Observable<any>{
    return this.http.get(`${this.stationUrl}/getStationById/${id}`)
  }

  getStationByName(name:String):Observable<any>{
    return this.http.get(`${this.stationUrl}/getStationByName/${name}`)
  }

  getStationByNameAndDistrict(name:String,district:String):Observable<any>{
    return this.http.get(`${this.stationUrl}/getStationByNameAndDistrict/${name}/${district}`)
  }
  
}
