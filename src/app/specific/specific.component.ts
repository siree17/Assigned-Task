import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataCallingService } from '../services/data-calling.service';

@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.css']
})
export class SpecificComponent implements OnInit {

  constructor(private service : DataCallingService,private route:ActivatedRoute) { }

  id:any;
  specific:any;
  specificData:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.service.callingData().subscribe(response=>{
      this.specific=response;
      
      this.specificData=this.specific[(this.id-1)];

      
    })
  }

}
