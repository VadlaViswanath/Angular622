import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

   itemsList = [
    {
      customerName:"venkatesh",
      orderId: 1,
      items: 3,
      totalPrice: 300,
      status: ["Order Recieved","Preparing", " Dispatched","Delivered"]
    },
    {
      customerName:"Sashi",
      orderId: 2,
      items: 2,
      totalPrice: 200,
      status: ["Order Recieved","Preparing", " Dispatched","Delivered"]
    }
  ];

  itemsDetails = [
    {
      customerName:"venkatesh",
      orderId: 1,
      itemsName: ['Burger', 'Pizza', 'Coke',
      ],
      price: [100,50,150],
      address: "Hyd"
    },
    {
      customerName:"Sashi",
      orderId: 2,
      itemsName: [ 'chicken Burger','Non-veg Pizza',
      ],
      price: [150,150],
      address: "Karim nagar"
    },
  ];


  itemsListArray(){
    return this.itemsList;
  };

  itemsDetailsArray(){
    return this.itemsDetails;
  };

  constructor() { }
}
