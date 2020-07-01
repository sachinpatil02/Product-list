import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  title = 'product-catalogue';
 
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['product'])
  }
  
  }
