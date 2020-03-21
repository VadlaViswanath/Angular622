import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ang62',
  templateUrl: './ang62.component.html',
  styleUrls: ['./ang62.component.css']
})
export class Ang62Component implements OnInit {

  constructor(private _http:HttpClient) { }
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
