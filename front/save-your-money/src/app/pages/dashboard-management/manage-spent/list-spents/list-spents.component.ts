import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-spents',
  templateUrl: './list-spents.component.html',
  styleUrls: ['./list-spents.component.css']
})
export class ListSpentsComponent implements OnInit{
  @Input() spents: any;
  content?: string;
  itemToDelete = false
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() popUpdate = new EventEmitter<any>();
  @Output() reloadPrent = new EventEmitter<any>();
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.spents)
  }

  deleteItem(itemId : any){
    this.userService.deleteUserSpent(itemId).subscribe({
      next: data => {
        this.content = data;
        this.reloadPrent.emit(true)
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }
  updateItem(itemId : any, name : any, price : any, category : any){
    let data = {
      itemId: itemId,
      name: name,
      price: price,
      category: category
    }
    this.popUpdate.emit(true)
    this.newItemEvent.emit(data)
  }
}
