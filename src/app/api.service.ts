import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';

export  interface  Item{
Brand:  string;
CategoryID:  string;
Category:  string;
GenderID:  string;
ImagePath:  string;
NumberOfItemsAvailable:  number;
ProductDescription:string;
ProductID:string;
ProductName:string;
ProductPrice:number;
Size:number;
SubCategory:string
}

@Injectable({
providedIn:  'root'
})

export  class  ApiService {
private  dataURL:  string  = "https://xdcoders-f53a1.firebaseio.com/ProductDetails.json?auth=SqMnwGhMuZLuIqQA30zEUOsRgthafpCE8pdLH0p3";
constructor(private  httpClient:  HttpClient) {}
fetch():  Observable<Item[]>{
return <Observable<Item[]>>this.httpClient.get(this.dataURL);
}
}
