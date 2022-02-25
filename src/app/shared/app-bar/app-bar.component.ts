import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styles: [
  ]
})
export class AppBarComponent  {

  constructor() { }

  getBtnCSS (){
    // return routerLinkActive 
  }

}
