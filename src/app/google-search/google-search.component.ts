import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-google-search',
  templateUrl: './google-search.component.html',
  styleUrls: ['./google-search.component.css']
})
export class GoogleSearchComponent implements OnInit {

  inputSearch:any;

  results1:any=[];

  results2:any=[];

  // url:string='https://jsonplaceholder.typicode.com/todos';
  url:string='http://localhost:3000/users'

  constructor(private hService:HttpClient) {
    this.hService.get(this.url).subscribe(data=>{
      this.results1=data;
      // console.log(this.results1);
      this.results2=this.results1;
    });
    
   }


  ngOnInit() {
  }

  search(){
    this.results2=this.results1.filter((emp)=>{
      return emp.name.toLowerCase().indexOf(this.inputSearch.toLowerCase())>=0 || emp.mobile.indexOf(this.inputSearch)>=0;
          // return emp.title.toLowerCase().match(this.inputSearch.toLowerCase());
// return emp.title.toLowerCase().includes(this.inputSearch.toLowerCase());
    });
   }



}




     