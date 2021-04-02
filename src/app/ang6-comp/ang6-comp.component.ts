import { Component, OnInit } from '@angular/core';
import { Ang6ServiceService } from '../services/ang6-service.service';

@Component({
  selector: 'app-ang6-comp',
  templateUrl: './ang6-comp.component.html',
  styleUrls: ['./ang6-comp.component.css']
})
export class Ang6CompComponent implements OnInit {

  constructor(private _A6Service:Ang6ServiceService) { }

  arrayData:any=[];
  submit(data){
    this._A6Service.send(data).subscribe(
        ()=>{
          alert('Form Data send Successfully');
        }
    )
  }


  getData(){
    this._A6Service.get().subscribe((x)=>{
      this.arrayData=x;
    })
  }
  
  ngOnInit() {
  }

}
