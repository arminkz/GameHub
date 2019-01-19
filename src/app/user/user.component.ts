import {Component, Input, OnInit} from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  getImageUrl() {
    if (this.user.profilePicUrl === '') { return 'http://192.168.1.5:56608/UserImage/1.png'; }
    return this.user.profilePicUrl;
  }

}
