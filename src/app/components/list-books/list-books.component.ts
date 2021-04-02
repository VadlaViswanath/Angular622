import { Component, OnInit } from '@angular/core';
import { ListBooksService } from 'src/app/services/list-books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  arrayData:any=[];
  cseBranch:any=[];
  electricalBranch:any=[];
  civilBranch:any=[];
  mechanicalBranch:any=[];
  allBranchData:any=[];

  cseBranchChecked:boolean;
  electricalBranchChecked:boolean;
  civilBranchChecked:boolean;
  mechanicalBranchChecked:boolean;

  electricalIndividual:boolean;
  constructor(private bookService:ListBooksService) { }


selectAll(){
  this.cseBranchChecked=true;
  this.electricalBranchChecked=true;
  this.civilBranchChecked=true;
  this.mechanicalBranchChecked=true;
}

  ngOnInit() {
    this.bookService.getData().subscribe((data)=>{
        // console.log(data);
        // this.arrayData = data;
          for(let data1 in data){
              // console.log(data[data1].type);
              if(data[data1].type == "CSE"){
                this.cseBranch.push(data[data1]);
                // console.log(this.cseBranch);
              } 

              if(data[data1].type == "Elecrical"){
                this.electricalBranch.push(data[data1]);
                // console.log(this.electricalBranch);
              }

              if(data[data1].type == "Civil"){
                this.civilBranch.push(data[data1]);
                // console.log(this.electricalBranch);
              }

              if(data[data1].type == "Mechanical"){
                this.mechanicalBranch.push(data[data1]);
                // console.log(this.electricalBranch);
              }
          }
        
    });


    // this.electricalBranchAll();
     
  }

  // electricalBranchAll(){
  //   if(this.electricalBranchChecked ==true){
  //     this.electricalIndividual=true;
  //   }
  // }

  getId(event,id){
      if(event.target.checked){
        this.allBranchData.push(id);
        console.log(this.allBranchData);
      } else{
        this.allBranchData = this.allBranchData.filter(m=> m!=id);
        console.log(this.allBranchData);
      }
  }
}
