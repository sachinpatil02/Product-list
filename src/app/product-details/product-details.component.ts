import { Component, OnInit } from '@angular/core';
import { ApiService, Item } from '../api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss', '../product/product.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  item:Item;
  availableStock:boolean;
  productID:string;
  private routeSub: Subscription;
  constructor(private productService:ApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.fetchData();

    this.routeSub = this.activeRoute.params.subscribe((params: Params): void => {
     this.productID = params['id'];
    
  });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
}

  fetchData(){
    this.productService.fetch().subscribe((data:  Array<Item>)=>{
     if( data !== null ){
      //debugger;
      console.log(data);
      data.forEach(element => {
        if (element.ProductID === this.productID){
          this.item = element;
          if (element.NumberOfItemsAvailable > 0){
            this.availableStock = true;
          }else{this.availableStock = false}
        }
        
      });
      
     } 
     
    
     

    }, (err)=>{
    console.log(err);
    });
    }

}
