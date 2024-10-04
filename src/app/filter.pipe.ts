import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(itemsArray:any[], filterBy:string): any[]|undefined {
    if(!itemsArray || !filterBy){
      return itemsArray;
    }
    return itemsArray.filter((item)=>item.title.toLowerCase().includes(filterBy.toLowerCase()))
  }

}
//Nike Shoes --> NIKE shoes // nike Shoes
