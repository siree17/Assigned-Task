import { Component, OnInit } from '@angular/core';
import { DataCallingService } from '../services/data-calling.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'sireeshaProj';
  constructor(private service:DataCallingService){
  }
  data:any;
  ngOnInit() {
    this.service.callingData().subscribe(response=>{
      console.log(response);
      this.data=response;
      
    })
  }

}
