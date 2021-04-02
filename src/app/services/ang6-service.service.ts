import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Ang6ServiceService {

  constructor(private _http:HttpClient) { }

  url:string="http://localhost:3000/users";
  url2:string= "http://localhost:8080/posts";
  send(obj){
   return this._http.post(this.url,obj);
  }

  getData(searchData){
   return this._http.get(`https://pokeapi.co/api/v2/pokemon/${searchData}`);
  }

  get(){
    return this._http.get(this.url);
  }

  get2(){
    return this._http.get(this.url2);
  }
}
