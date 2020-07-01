import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() type:string;
homeBanner:boolean;
productBanner:boolean;

  constructor() { }
  
  ngOnInit() {
    if (this.type =='home')
    {
      this.homeBanner = true;
    }

    if(this.type == 'product'){
      this.productBanner = true;
    }
  }

}
