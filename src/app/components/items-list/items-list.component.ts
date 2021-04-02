import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  itemList: any;
  constructor(private itemService: ItemsService,private router: Router) { 
    this.itemList = this.itemService.itemsListArray();
  }

  ngOnInit() { }

  staus(items, index){
    this.itemList.splice(index,{
      customerName: items.customerName,
      items:items.items,
      totalPrice: items.totalPrice,
      status: items.status[index+1]})
  }
  gotoDetails(items){
    this.router.navigate([`/items-details/${items.orderId}`]);
  }

}
