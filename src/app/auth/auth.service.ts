import {ToastrService} from 'ngx-toastr';
import {Injectable, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService implements OnInit{
  public authenticated = false;

  constructor(private toastr: ToastrService) {
    console.log('auth !');
  }

  ngOnInit() {
    const authSelf = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        authSelf.authenticated = true;
      } else {
        // No user is signed in.
        authSelf.authenticated = true;
      }
    });
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        () => this.toastr.success('Registered Successfully !'),
        error => {
          this.toastr.error(error.message);
        }
      );
  }

  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        () => this.toastr.success('Logged in Successfully !'),
        error => {
          this.toastr.error(error.message);
        }
      );
  }

  isAuthenticated(): boolean {
    return firebase.auth().currentUser !== null;
  }
}
