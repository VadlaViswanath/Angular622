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

//   passData(Val){
//     this._Sservice.subject.next(Val);
// }

passData(){
  // this._Sservice.subject.next(this.user);
  this._Sservice.passData(this.user);
  this.user={};
}

   ngOnInit() {
    // this._Sservice.getData()
    // // .pipe(filter(re=> {
    // //   re.name === "visu" }))
    // .subscribe( (data) =>{
    //   this.arrayOfData = data;
    // });    
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
