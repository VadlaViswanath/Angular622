import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ang6ServiceService } from './services/ang6-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular622';
  apiData:any=[];
  defaultText:any;
  constructor(private angService:Ang6ServiceService, private router: Router){
      console.log(this.defaultText);
  }

  itemsList(){
    this.router.navigate(['/items-list']);
  }

  onValueChange(event){
    console.log(event.markDown);
    console.log(event.html);
  }
  ngOnInit(){
    this.angService.get2().subscribe((data)=>{
      for(let api in data){
            this.apiData = data[api];
          // console.log(this.apiData);
      }
    })
  }
}


