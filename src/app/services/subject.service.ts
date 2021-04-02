import { Injectable } from '@angular/core';
import { Subject, observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

   arrayData:any=[
      {id:1,name:"visu",mobile:"9441403658",Designation:"Ui Developer"},
      {id:2,name:"madhu",mobile:"7894613311",Designation:"FrontEnd Engineer"},
      {id:3,name:"vijay",mobile:"0359641344",Designation:"Javascript Developer"},
      {id:4,name:"swapna",mobile:"876133149613",Designation:"IT Recruiter"}
  ]


    //Subject
   subject = new Subject();
  //  subject = new Subject();
//================

  passData(data){
    this.subject.next(data);
  }

//=================
  sendData(){
    this.subject.next(this.arrayData);
    // console.log(this.arrayData);
   }
//==========
  getData(){
    return this.subject.asObservable();
  }



    //Observable
    obs = new Observable((obs)=>{
        obs.next(this.arrayData);
            // obs.next("data send");
    })

    //Promise
      prs = new Promise((pro)=>{
        pro("this.arrayData");
        pro("data send successfully")
      });

   constructor() {}
  
   
}
