import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-spents',
  templateUrl: './list-spents.component.html',
  styleUrls: ['./list-spents.component.css']
})
export class ListSpentsComponent implements OnInit{
  @Input() spents: any;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.spents)
  }
}
