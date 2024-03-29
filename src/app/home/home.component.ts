import {Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {

  }

  testToast() {
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }

}
