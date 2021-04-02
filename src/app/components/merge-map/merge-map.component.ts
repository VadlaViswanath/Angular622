import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap, concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor() { }

  getData(data){
    return of("Brand is "+ data.brand).pipe(delay(3000))
  }
    arr = ["Tech","comedy","news"];
    data2=[
      {type:"mobile",brand:"samsung",price:18000},
      {type:"bike",brand:"bajaj",price:70000},
      {type:"car",brand:"mahindra",price:120000}
    ]
  ngOnInit() {

    var source = from(this.data2);
    
    
    // var sub=source.pipe(map(res=> this.getData(res)),mergeAll());   //map + mergeAll
    var sub=source.pipe(mergeMap(res=> this.getData(res)));            //mergeMap
      // source.subscribe(res=> res.subscribe(res2 => {                //two subscribes
      //   console.log(res2);
      // }));

        sub.subscribe((res)=>{
          console.log(res);
        })
  }

}
