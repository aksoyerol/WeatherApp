import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/Models/Response';
import { Current } from "../../Models/Current"

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient : HttpClient) { 
  }

  getCurrentData(filtertext:string) : Observable<Response>{
  return this.httpClient.get<Response>("http://api.weatherapi.com/v1/current.json?key=bc509beb6bf04599a02114303211004&q="+filtertext+"&aqi=yes")
  }
  
}
