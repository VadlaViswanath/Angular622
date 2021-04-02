import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { map ,filter} from 'rxjs/operators';
@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component implements OnInit {

  developer:any =["suma","guna"];
  employeeName:string="guna";
  constructor(private _Sservice:SubjectService) { }

  nChange(){
    this.employeeName="suma";
  }

  ngOnInit() {
    this._Sservice.getData()
    .subscribe( (data:any)=>{
       this.developer.push(data);
      console.log(this.developer);
    });
  }

}
