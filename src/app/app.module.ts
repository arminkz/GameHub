import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { GamesComponent } from './games/games.component';
import { DesignComponent } from './design/design.component';
import { PlayComponent } from './play/play.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import { UserComponent } from './user/user.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserService} from './user/user.service';
import {JwtInterceptor} from './auth/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserprofileComponent,
    GamesComponent,
    DesignComponent,
    PlayComponent,
    SignupComponent,
    SigninComponent,
    UserComponent,
    AdminpanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    UserService/*,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
