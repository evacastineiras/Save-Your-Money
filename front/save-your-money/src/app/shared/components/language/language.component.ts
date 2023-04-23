import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit{

    public toggle : boolean;
    public language : string = "eng";

constructor(
    private translate: TranslateService
){
    this.toggle = false;

    }

ngOnInit()
{
    this.translate.use('eng');
       
}

showLan(){
    this.toggle = !this.toggle;
}

changeLan(language : string){
    this.translate.use(language);
    console.log(language)
}
}