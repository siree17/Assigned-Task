import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCallingService {

  constructor(private http:HttpClient) { }

  url="/assets/data.json";
  callingData(){
    return this.http.get(this.url);
  }
}
