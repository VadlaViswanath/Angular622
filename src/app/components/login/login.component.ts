import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor() { }

  // user={};
  // users=[];




mail:string;
pwd:string;
validation:string="";

constructor(private _router:Router) { }





// valid(){
//   if(this.userFunc(this.uname,this.pwd)){
//       localStorage.setItem('username1',this.uname);
//      // alert(`Login Credentisls are wright`);
//      this._router.navigate(['../dashboard']);
 
//    }
//     else
//     alert(`Login Credentisls are wrong`);
// }


  

  // submit(){
  //   this.users.push(this.user);
  //   alert(this.users.length);
  //    localStorage.setItem('myData',JSON.stringify(this.users));
  //   this.user={};
  // }


  //  userFunc(uname,pwd):boolean{
  //       var status=false;
  //       for(let user of this.users){
    
  //         if(user.uname==uname && user.pwd == pwd){
  //           status=true;
  //           break;
  //         }
    
  //       }
  //       return status;
  //   }


submit(){
  localStorage.setItem('username1',JSON.stringify({"email":this.mail,"password":this.pwd}));
  this._router.navigate(['../dashboard']);
  this.mail="";
  this.pwd="";
}

  


  ngOnInit() {
  }

}
