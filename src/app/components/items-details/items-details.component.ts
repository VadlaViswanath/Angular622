import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css']
})
export class ItemsDetailsComponent implements OnInit {

  itemDetails= [];
  id: any;
  constructor(private itemService: ItemsService,private route: ActivatedRoute) { 
    this.route.paramMap.subscribe((data: any)=>{
      this.id = parseInt(data.params.orderId);
      this.itemsDetails();
    })
    

  }

  ngOnInit() {
  }

  itemsDetails(){
    // this.itemService.itemsDetailsArray().forEach((data:any)=>{
    //     if(this.id === data.orderId){
    //       this.itemDetails.push(data);
    //     }
    // });

    for(let data of this.itemService.itemsDetailsArray()){
           if(this.id === data.orderId){
          this.itemDetails.push(data);
        }
    }
  }
}
