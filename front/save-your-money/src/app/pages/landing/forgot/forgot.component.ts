import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit{

  @Output() public valueTab = new EventEmitter<any>()

  form: any = {
    email: null,
  };

  errorMessage = '';


  constructor(private authService: AuthService) { }

  @Output() onLogin = new EventEmitter<boolean>();

  ngOnInit(): void {

  }

  sendToParent(valueToSend : any){
    this.valueTab.emit(valueToSend);
  }

  onSubmit(): void {
    const { email } = this.form;

    this.authService.forgot(email).subscribe({
      next: data => {
        console.log(data);
        this.sendToParent(0)
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }

}
