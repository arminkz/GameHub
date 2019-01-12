import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDp2riwIxmw8iYNpjp24C9nqexFB4hFVEk',
      authDomain: 'gamehub-beta.firebaseapp.com'
    });
  }

  ngAfterViewInit() {
    // this.toastr.info('welcome', 'GameHub Beta !');
  }
}
