import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  //  VIEWCHILED COMONENT WORKING 

  // @ViewChild(HomeComponent) homeComponent!:HomeComponent;
  // increseData(){
  //   this.homeComponent.increse()
  // }
  // decreseData(){
  //   this.homeComponent.decrese()
  // }
  constructor() { }
   
  ngOnInit(): void {
  }

}
