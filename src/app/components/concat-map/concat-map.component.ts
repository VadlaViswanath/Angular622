import { Component, OnInit } from '@angular/core';
import { of, from, concat } from 'rxjs';
import { delay, concatMap, concatAll, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor(private http:HttpClient) { }
url:string="http://localhost:3000/users";
url2:string="http://localhost:8080/posts";

  getData(data){
    return of("Brand is "+ data.brand).pipe(delay(2000))
  }
    arr = ["Tech","comedy","news"];
    data2=[
      {type:"mobile",brand:"samsung",price:18000},
      {type:"bike",brand:"bajaj",price:70000},
      {type:"car",brand:"mahindra",price:120000}
    ]
  ngOnInit() {

    var source = from(this.data2);

    var obs1=this.http.get(this.url).pipe(delay(2000));
    var obs2 = this.http.get(this.url2).pipe(delay(2000));
    
    var source2= concat(obs1,obs2);

    source2.subscribe((res)=>{
      console.log(res);
    })
    
    // var sub=source.pipe(map(res=> this.getData(res)),concatAll());   //map + concatAll
    var sub=source.pipe(concatMap(res=> this.getData(res)));            //concatMap
      // source.subscribe(res=> res.subscribe(res2 => {                //two subscribes
      //   console.log(res2);
      // }));

        // sub.subscribe((res)=>{
        //   console.log(res);
        // })
  }

}
