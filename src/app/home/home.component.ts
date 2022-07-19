import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //  VIEWCHILEDE WORKING

  // message:string=" ";
  // count:number=0;
   constructor() { }

  // VIEWCHILD WORKING

  // increse(){
  //   this.count = this.count + 1;
  //   this.message = "counter"+this.count
  // }
  // decrese(){
  //   this.count = this.count-1;
  //   this.message = "counter"+this.count
  // }

   ngOnInit(): void {
  }

}
