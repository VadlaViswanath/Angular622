import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  data=[
    {type:"mobile",brand:"vivo",price:15000},
    {type:"bike",brand:"yamaha",price:80000},
    {type:"car",brand:"honda",price:180000}
  ];

  data2=[
    {type:"mobile",brand:"samsung",price:18000},
    {type:"bike",brand:"bajaj",price:70000},
    {type:"car",brand:"mahindra",price:120000}
  ]

  ngOnInit() {
    //promise
    //===========
    var promise = new Promise((resolve,reject)=>{
        // resolve("resolve executed");
        resolve(this.data);
        resolve(this.data2);
        // resolve("resolve executed 2nd time");
        reject("reject executed");
    })

    // promise.then((data)=>{
    //     console.log(data);
    // }).catch((data)=>{
    //     console.log(data);
    // });
    //==========================
          //observable
          //===============
    // var observable = new Observable((obs)=>{
    //     obs.next(this.data);
    //     obs.next(this.data2);
    //     // obs.error("No data Available");
    //     obs.complete();
    // });

    // observable.subscribe((data)=>{
    //     console.log(data);
    // },(error)=>{
    //     console.log(error);
    // },()=>{
    //     console.log("data sent already");
    // });
    //==============================
        //promise to observable
        //===================
      var subToObs= from(promise);

      subToObs.subscribe((res)=>{
        console.log(res);
      })




  }

}
