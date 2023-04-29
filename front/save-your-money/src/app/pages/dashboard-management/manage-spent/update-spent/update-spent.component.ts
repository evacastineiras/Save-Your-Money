import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-spent',
  templateUrl: './update-spent.component.html',
  styleUrls: ['./update-spent.component.css']
})
export class UpdateSpentComponent implements OnInit {
  form: any = {
    name: null,
    price: null,
    category: null
  };
  @Input() updateItemInfo: any;
  displayName = ""
  displayPrice = ""
  displayCategory = ""



  closed = false
  content?: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.displayName = this.updateItemInfo.name
    this.displayPrice = this.updateItemInfo.price
    this.displayCategory = this.updateItemInfo.category
    console.log(this.updateItemInfo)
  }

  closeNew(){
    this.closed = true
  }

  onSubmit(): void {
    let { name, price, category } = this.form;
    console.log(price)

    if(name == null){
      name = this.updateItemInfo.name
    }
    if(price == null){
      price = this.updateItemInfo.price
    }
    if(category == null){
      category = this.updateItemInfo.category
    }
    console.log(this.updateItemInfo.itemId, name)
    this.userService.updateUserSpent(this.updateItemInfo.itemId, name, price, category).subscribe({
      next: data => {
        this.content = data;
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
}
