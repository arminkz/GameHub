import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from './user.model';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  @Input() user: User;
  @Output() friendAdded: EventEmitter<any> = new EventEmitter();

  apiImageUrl = environment.apiUrl + '/UserImage/';

  ngOnInit() {
  }

  getImageUrl() {
    if (this.user.picUrl == null || this.user.picUrl === '') { return this.apiImageUrl + 'avatar.png'; }
    return this.apiImageUrl + this.user.picUrl;
  }

  onAddFriend() {
    this.friendAdded.emit(this.user.id);
  }

}
