import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {GamesComponent} from './games/games.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {PlayComponent} from './play/play.component';
import {DesignComponent} from './design/design.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'games', component: GamesComponent},
  {path: 'my', component: UserprofileComponent},
  {path: 'play', component: PlayComponent},
  {path: 'design', component: DesignComponent},
  {path: 'login', component: SigninComponent},
  {path: 'register', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
