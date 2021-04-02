import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListBooksService {

  url:string="http://localhost:3000/books";
  constructor(private http:HttpClient) {   }

  getData(){
    return this.http.get(this.url);

  }

 

}
