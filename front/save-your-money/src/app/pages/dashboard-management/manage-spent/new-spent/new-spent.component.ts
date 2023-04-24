import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-spent',
  templateUrl: './new-spent.component.html',
  styleUrls: ['./new-spent.component.css']
})
export class NewSpentComponent implements OnInit{
  form: any = {
    name: null,
    price: null,
    category: null
  };
  content?: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, price, category } = this.form;

    this.userService.createUserSpent(name, price, category).subscribe({
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
