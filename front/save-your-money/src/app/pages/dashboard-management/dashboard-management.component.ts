import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-management',
  templateUrl: './dashboard-management.component.html',
  styleUrls: ['./dashboard-management.component.css']
})
export class DashboardManagementComponent implements OnInit{
  public varToggle : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  menuToggle(){
    this.varToggle = !this.varToggle;
  }
}
