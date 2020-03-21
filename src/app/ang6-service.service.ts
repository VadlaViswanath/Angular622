import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Ang6ServiceService {

  constructor(private _http:HttpClient) { }

  url:string="http://localhost:3000/users";

  send(obj){
   return this._http.post(this.url,obj);
  }


  get(){
    return this._http.get(this.url);
  }
}
