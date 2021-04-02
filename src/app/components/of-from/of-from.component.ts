import { Component, OnInit } from '@angular/core';
import { of, interval, timer, from } from 'rxjs';
import { take, map, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  data2=[
    {type:"mobile",brand:"samsung",price:18000},
    {type:"bike",brand:"bajaj",price:70000},
    {type:"car",brand:"mahindra",price:120000}
  ]

  constructor() { }
  
  

  ngOnInit() {
    var source= of("visu","guna","suma");  //of
    // source2 = interval(1000);
    // var source3= timer(3000,1000);
    var source4 = from(this.data2);

    //=========================



    source.subscribe((res)=>{
      console.log(res);
    });
    //==============
    // this.source2.pipe(take(5)).subscribe((res)=>{
    //   console.log(res);
    // });
    //===============
    // source3.pipe(take(5)).subscribe((res)=>{
    //   console.log(res);
    // });

    //====================
      source4.subscribe((res)=>{
          console.log(res);
        });

      


  }

}
