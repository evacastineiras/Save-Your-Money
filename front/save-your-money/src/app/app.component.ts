import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'save-your-money';

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('eng');
    translate.addLangs(['eng','spa', 'gal']);
  }
}
