import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private toastr: ToastrService,
              private auth: AuthService) {
    firebase.initializeApp({
      apiKey: 'AIzaSyDp2riwIxmw8iYNpjp24C9nqexFB4hFVEk',
      authDomain: 'gamehub-beta.firebaseapp.com'
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.toastr.info('welcome', 'GameHub Beta !');
  }

  onLogout() {
    this.auth.logout();
  }
}
