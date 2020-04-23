import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component implements OnInit {

  developer:any =["madhu","vijay"];
  constructor(private _Sservice:SubjectService) { }

  ngOnInit() {
    this._Sservice.getData().subscribe( (data:any)=>{
      //  this.developer.push(data);
      console.log(data);
    });
  }

}
