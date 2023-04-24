import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-spent',
  templateUrl: './delete-spent.component.html',
  styleUrls: ['./delete-spent.component.css']
})
export class DeleteSpentComponent implements OnInit{
  form: any = {
    name: null,
    price: null,
    category: null
  };
  spentId = null
  content?: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, price, category } = this.form;

    this.userService.deleteUserSpent(this.spentId).subscribe({
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
