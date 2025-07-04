import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Translation modules
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

//Components 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/landing/login/login.component';
import { RegisterComponent } from './pages/landing/register/register.component';
import { LanguageComponent } from './shared/components/language/language.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LandingPageComponent } from './pages/landing/landing-page/landing-page.component';
import { DashboardManagementComponent } from './pages/dashboard-management/dashboard-management.component';
import { httpInterceptorProviders } from './helpers/http.interceptor'; 
import { FormsModule }   from '@angular/forms';
import { DashboardBoxesComponent } from './pages/dashboard-management/dashboard-boxes/dashboard-boxes.component';
import { ProfileComponent } from './pages/dashboard-management/profile/profile.component';
import { ManageSpentComponent } from './pages/dashboard-management/manage-spent/manage-spent.component';
import { NewSpentComponent } from './pages/dashboard-management/manage-spent/new-spent/new-spent.component';
import { ListSpentsComponent } from './pages/dashboard-management/manage-spent/list-spents/list-spents.component';
import { UpdateSpentComponent } from './pages/dashboard-management/manage-spent/update-spent/update-spent.component';
import { ForgotComponent } from './pages/landing/forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    LanguageComponent,
    LandingComponent,
    LandingPageComponent,
    DashboardManagementComponent,
    DashboardBoxesComponent,
    ProfileComponent,
    ManageSpentComponent,
    NewSpentComponent,
    ListSpentsComponent,
    UpdateSpentComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'forgot', component: ForgotComponent},
      {path: 'landing', component: LandingComponent},
      {path: '', redirectTo: '/', pathMatch: 'full'},
    ]),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => {
              return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
            },
            deps: [HttpClient]
        }
    })
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
