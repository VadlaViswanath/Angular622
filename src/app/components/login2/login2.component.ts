import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  users=[
    {uname:"visu",pwd:"4321"},
    {uname:"suma",pwd:"2341"},
    {uname:"guna",pwd:"2143"},
    {uname:"sony",pwd:"1243"}
];

uname:string;
pwd:number;
validation:string="";

constructor(private _router:Router) { }

userFunc(uname,pwd):boolean{
    var status=false;
    for(let user of this.users){

      if(user.uname==uname && user.pwd == pwd){
        status=true;
        break;
      }

    }
    return status;
}



submit(){
  if(this.userFunc(this.uname,this.pwd)){
      localStorage.setItem('username1',this.uname);
     // alert(`Login Credentisls are wright`);
     this._router.navigate(['../dashboard']);
 
   }
    else
    alert(`Login Credentisls are wrong`);
}

ngOnInit(){}

}
