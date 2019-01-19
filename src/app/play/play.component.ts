import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {

  }

  testToast() {
    this.toastr.show(' <img src="/assets/images/spinner_50.gif" alt=""> Finding Match ...', '', {
      progressBar: true,
      disableTimeOut: true,
      enableHtml: true
    });
  }
}
