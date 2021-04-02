import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ang6ServiceService } from '../services/ang6-service.service';

@Component({
  selector: 'app-ang62',
  templateUrl: './ang62.component.html',
  styleUrls: ['./ang62.component.css']
})
export class Ang62Component implements OnInit {

  constructor(private _http:HttpClient,private angService:Ang6ServiceService) {
    // this.arrayData2 = this.arrayData;
    //   this._http.get(`https://pokeapi.co/api/v2/pokemon/${this.searchData}`)
    //   .subscribe((res)=>{
    //     console.log(res);
    //     this.arrayData= res;
    //   })
   }
   arrayData:any=[];
   arrayData2:any=[];
   searchData:string=""
   getData(){
      this.angService.getData(this.searchData).subscribe((res)=>{
            console.log(res);
             this.arrayData= res;
           })
   }


  username:string="";
  response:any;
  url:string="https://api.github.com/users/";

  search(){
    this._http.get(this.url + this.username).subscribe((response)=>{
        this.response=response;
        console.log(response);
    })
  }
  ngOnInit() {
  }

}
