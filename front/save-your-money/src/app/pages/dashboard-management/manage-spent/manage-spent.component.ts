import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-spent',
  templateUrl: './manage-spent.component.html',
  styleUrls: ['./manage-spent.component.css']
})
export class ManageSpentComponent implements OnInit {
  content?: string;
  public varToggle : boolean = false;
  newSpent = false
  data = []
  check  = false
  totalValue = 0
  userData = []
  updateSpent: any
  updateCheck = false


  constructor(private userService: UserService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next: data => {
        this.content = data;
        this.data = data;
        this.check = true
        this.totalSpent(data)
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
  sendData(spentsList: any){
    this.data = spentsList
  }
  createSpent(){
    this.newSpent = true
  }
  updateSpentCheck(upd: any){
    this.updateCheck = true
    console.log(this.updateCheck)
  }

  totalSpent(data: any){
    let total = 0
    for(let item of data){
      total = total + item.price
    }
    this.totalValue = total
  }
  getUserInfo(){
    this.userData = this.storageService.getUser();
    console.log(this.storageService.getUser())
  }
  updateItemList(newItem: any){
    this.updateSpent = newItem
  }
  reloadChilds(upd: any){
    this.ngOnInit()
    this.newSpent = false
    this.updateCheck = false
  }

}
