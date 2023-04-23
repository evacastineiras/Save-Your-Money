import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent  {

  @Output() valueTab = new EventEmitter<any>()


  sendToParent(valueToSend : any){
    this.valueTab.emit(valueToSend);
  }
}
