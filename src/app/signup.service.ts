import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUp } from './sign-up';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  private busUrl3="http://localhost:8080/signUp";

  register(signUp:SignUp):Observable<any>{
  return this.http.post(`${this.busUrl3}/addUser`, signUp);
  }
  getByNameAndPassword(userName:String,password:String):Observable<any>{
    return this.http.get(`${this.busUrl3}/getByNameAndPassword/${userName}/${password}`)
  }
}
