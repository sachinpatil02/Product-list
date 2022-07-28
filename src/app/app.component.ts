import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as firebase from 'firebase';

import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
declare var gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent { 

//   title = 'product-catalogue'; 
//   constructor(private router: Router) {}

//   ngOnInit() {
//     this.router.navigate(['product'])
//   }  
//   }

  export class AppComponent implements AfterViewInit, OnDestroy {
    private routerSubscription: Subscription;
    constructor(private router: Router) {
    }
    ngOnInit() {
      this.router.navigate(['product'])
    }
    ngAfterViewInit(): void {
      // subscribe to router events and send page views to Google Analytics
      this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          gtag('config', 'G-MJ9K4C8YCG', {'page_path': event.urlAfterRedirects});
        });
    }
    ngOnDestroy(): void {
      this.routerSubscription.unsubscribe();
    }
  }
