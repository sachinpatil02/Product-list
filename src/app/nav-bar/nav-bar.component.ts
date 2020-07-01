import { Component,HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  changetheme(){
    document.getElementsByTagName('body')[0].classList.toggle('dark');
  }
  swithcer(){
    document.getElementsByClassName('option-switcher')[0].classList.toggle('option-visible');
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('nav').classList.add('navbar_fixed');   } else {
      document.getElementById('nav').classList.remove('navbar_fixed');
    }
  }
  ngOnInit() {
  }

}
