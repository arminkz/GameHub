import {ToastrService} from 'ngx-toastr';
import {Injectable, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable()
export class AuthService implements OnInit {
  public authenticated = false;

  constructor(private toastr: ToastrService,
              private router: Router) {
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

  signupUser(email: string, password: string, route: ActivatedRoute) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        () => {
          this.toastr.success('Registered Successfully !');
          this.router.navigate(['../'], {relativeTo: route});
        },
        error => {
          this.toastr.error(error.message);
        }
      );
  }

  signinUser(email: string, password: string, route: ActivatedRoute) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        () => {
          this.toastr.success('Logged in Successfully !');
          this.router.navigate(['../'], {relativeTo: route});
        },
        error => {
          this.toastr.error(error.message);
        }
      );
  }

  signoutUser() {
    firebase.auth().signOut()
      .then(
        () => this.toastr.info('Signed Out !'),
        error => this.toastr.error(error.message)
      );
  }

  isAuthenticated(): boolean {
    return firebase.auth().currentUser !== null;
  }

  username(): string {
    return firebase.auth().currentUser.email;
  }
}
