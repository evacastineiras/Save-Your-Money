import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  public switchValue : any = "0"

  arrival(value : any){
    this.switchValue = value;
  }


  
}
