import {ToastrService} from 'ngx-toastr';
import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  constructor(private toastr: ToastrService) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        () => this.toastr.success('Registered Successfully !'),
        error => {
          this.toastr.error(error.message);
        }
      );
  }
}
