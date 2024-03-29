import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { TaskRegisterComponent } from './task-register/task-register.component';

import { Interceptor } from './app.interceptor.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { UserDataService } from './data-services/user.data-service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    TaskRegisterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'signup', component: SignUpComponent},
      { path: 'home', component: HomeComponent },
      { path: 'tasks', component: TaskRegisterComponent }
    ]),
    Interceptor,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
