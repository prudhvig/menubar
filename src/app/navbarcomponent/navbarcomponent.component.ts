import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarcomponent',
  templateUrl: './navbarcomponent.component.html',
  styleUrls: ['./navbarcomponent.component.css']
})
export class NavbarcomponentComponent implements OnInit {


  position:string;
  constructor() {
    this.position = '';
  }
  calculateMarkerPosition(event: any): void{
    let left = event.target.offsetLeft;
    let width = event.target.offsetWidth;
    this.position = (Math.round(width/2)-20)+left+'px';
    document.getElementById('marker').classList.add('display-block');
  }
  ngOnInit() {
  }

}
