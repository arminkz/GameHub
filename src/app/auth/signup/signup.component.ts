import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    console.log(form);
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.auth.signupUser(form.value.email, form.value.password);
  }

}
