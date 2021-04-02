import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject2Component } from '../subject2/subject2.component';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  user={};
  arrayOfData:any = [];
  @ViewChild(Subject2Component) nameChange:Subject2Component;
  constructor(private _Sservice:SubjectService) { 
    
  }

  NameChange(){
    // this.nameChange.employeeName="visu";
    this.nameChange.nChange();
  }

  // check = document.getElementById('check');
passData(){
  // this._Sservice.subject.next(this.user);
  // this._Sservice.passData(this.user);
   console.log(this.user);
  this.user={};
}

   ngOnInit() {
    // this._Sservice.getData()
    // .subscribe( (data) =>{
    //   this.arrayOfData = data;
    // });   

    //============
    //Promise
    // this._Sservice.prs.then((x)=>{
    //   console.log(x);
    // });

    //=============
    //observble
  // this._Sservice.obs.subscribe((data) =>{
  //     console.log(data);
  //   }); 
   }

display(){
  // this._Sservice.sendData();
  //====

  //observble
  this._Sservice.obs.subscribe((data) =>{
      this.arrayOfData = data;
      console.log(data);
    }); 
    
}




}
