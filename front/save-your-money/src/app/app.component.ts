import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'save-your-money';
  isLoggedIn = false;
  email?: string;

  constructor(public translate: TranslateService,private storageService: StorageService, private authService: AuthService) {
    translate.setDefaultLang('eng');
    translate.addLangs(['eng','spa', 'gal']);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.email = user.email;
    }
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  changeLoginParent(val: any) {
    this.isLoggedIn = true;
  }
}
