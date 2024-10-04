import { Injectable } from '@angular/core';
import { ProductType } from './dashboard/dashboard.component';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  async getApiData(){
   
   let data= await fetch('http://localhost:8000/items')
   return data
  }
  addNewData(newdata:ProductType){
    fetch('http://localhost:8000/items',{
      method:'POST',
      body:JSON.stringify(newdata)

    })
  }
  async getSelectedProduct(id:string|null){
    let selectedproduct=await fetch('http://localhost:8000/items/'+id)
    return selectedproduct;
  }
  updateData(id:number|string,updatedData:any){
    fetch('http://localhost:8000/items/'+id,{
      method:'PATCH',
      body:JSON.stringify(updatedData)
    })
  }
  deleteData(id:number|string){
    fetch('http://localhost:8000/items/'+id,{
      method:'DELETE',
      
    })
  }
  constructor() { }
}
