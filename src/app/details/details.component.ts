import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

id:string|null='';
selectedProduct:any;
constructor(private route:ActivatedRoute, private ds:DataService){

}
  ngOnInit(): void {
   this.id=this.route.snapshot.paramMap.get('id')
   console.log(this.id)

   this.ds.getSelectedProduct(this.id)
   .then((res)=>res.json())
   .then((data)=>this.selectedProduct=data)

  }

}
