import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() public valueTab = new EventEmitter<any>()


  sendToParent(valueToSend : any){
    this.valueTab.emit(valueToSend);
  }
}
