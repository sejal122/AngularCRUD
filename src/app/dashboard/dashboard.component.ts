import { Component, NgModule, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink,FilterPipe,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  productList:any;
  filterBy:string=''
ngOnInit(): void {
  this.getProducts();

}
constructor(private ds:DataService) {
  
}

getProducts(){
this.ds.getApiData()
.then((res)=>res.json())
.then((data)=>{this.productList=data})
 
console.log(this.productList)
}






}
export interface ProductType{
  id:string,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{
    rate:number,
    count:number
  }
}