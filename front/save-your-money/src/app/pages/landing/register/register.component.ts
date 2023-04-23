import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() public valueTab = new EventEmitter<any>()


  sendToParent(valueToSend : any){
    this.valueTab.emit(valueToSend);
  }
}
