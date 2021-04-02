import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-dependent-select',
  templateUrl: './dependent-select.component.html',
  styleUrls: ['./dependent-select.component.css']
})
export class DependentSelectComponent implements OnInit {

  countryData:any=[];
    stateData:any=[];
    cityData:any=[];
  constructor(private _csService:CountryService) { }


  getState(event){
    // let coun={
    //   country_id:event.target.value
    // };
      this._csService.getState(event).subscribe((res)=>{
        console.log(res);
        this.stateData=res;
      });
      this.cityData=null;
      // console.log(event);
  }


  getCity(event){
      this._csService.getCity(event).subscribe((res)=>{
        console.log(res);
        this.cityData=res;
      })
  }

  ngOnInit() {
    this._csService.getCountry().subscribe( (data)=>{
      this.countryData=data;
      console.log(this.countryData);
    });
  }

    



}
