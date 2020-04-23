import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  arrayOfData:any = [];

  constructor(private _Sservice:SubjectService) { 
    
  }

  passData(Val){
    this._Sservice.subject.next(Val);
}

  ngOnInit() {
    this._Sservice.getData().subscribe( (data) =>{
      this.arrayOfData = data;
      // console.log(this.arrayOfData);
    });    
  }

display(){
  this._Sservice.sendData();
  //====


  //observble
  // this._Sservice.observable.subscribe((data) =>{
  //     this.arrayOfData = data;
  //     // console.log(data);
  //   });    

}




}
