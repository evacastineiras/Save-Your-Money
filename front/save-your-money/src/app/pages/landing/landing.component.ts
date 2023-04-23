import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  isLoggedIn = false
  @Output() onLoginParent = new EventEmitter<any>();

  public switchValue : any = "0"

  arrival(value : any){
    this.switchValue = value;
  }

  changeLogin(val: any) {
    this.isLoggedIn = true;
    this.setLoginParent()
  }
  setLoginParent(){
    this.onLoginParent.emit(true);
 }
  
}
