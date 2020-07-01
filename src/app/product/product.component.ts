import { Component, OnInit } from '@angular/core';
import { Item, ApiService } from '../api.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  items:Array<Item>;

  constructor(private productService:ApiService) { 

  }
  addToCart(){
    //$('.toast').toast('show');
  }
  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.productService.fetch().subscribe((data:  Array<Item>)=>{
     if( data !== null ){
      this.items = data;
     } 
    }, (err)=>{
    console.log(err);
    });
    }


}
