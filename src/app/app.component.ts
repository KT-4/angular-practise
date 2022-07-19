import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainee';

  employee:any[] = [
     {
      code:'emp001',
      name:'Kashyap',
      salary:1000
     },
     {
      code:'emp002',
      name:'Kartik',
      salary:1000
     },
     {
      code:'emp003',
      name:'Kalpesh',
      salary:1000
     },
     {
      code:'emp004',
      name:'Keyur',
      salary:1000
     }
  ];

   dob = new Date(2022,7,19)
   salary:number=65000


  employees:any[]=[{
     codeData:'001',
     nameData:'Kashyap',
     gender:'male',    
  },
  {
    codeData:'002',
    nameData:'Kalpit',
    gender:'male',    
 
  },
  {
    codeData:'003',
    nameData:'Kausar',
    gender:'female',    
 
  },
  {
    codeData:'004',
    nameData:'Kl',
    gender:'male',    
 
  },



  ]
}
