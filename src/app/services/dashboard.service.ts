import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {



   employees=[
      {name:"visu",dob:new Date('1994-02-24'),gender:"male",qualification:"B.Tech",Email:"visu@gmail.com",skills:["html5","css3","JS"]},
      {name:"suma",dob:new Date('1994-02-24'),gender:"female",qualification:"D.Ed",Email:"suma@gmail.com",skills:["html5","css3","JS"]},
      {name:"guna",dob:new Date('1994-02-24'),gender:"male",qualification:"SSC",Email:"guna@gmail.com",skills:["html5","css3","JS"]}
  ]
  constructor() { }

  getData(){
    return this.employees;
  }
}
