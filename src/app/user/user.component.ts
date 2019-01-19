import {Component, Input, OnInit} from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  @Input() user: User;

  apiImageUrl = 'http://localhost:56608/UserImage/';

  ngOnInit() {
  }

  getImageUrl() {
    if (this.user.profilePicUrl == null || this.user.profilePicUrl === '') { return this.apiImageUrl + 'avatar.png'; }
    return this.apiImageUrl + this.user.profilePicUrl;
  }

}
