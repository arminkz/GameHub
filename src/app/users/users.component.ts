import { Component, OnInit } from '@angular/core';

import {User} from '../user/user.model';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private usrs: UserService ) { }

  ngOnInit() {
    this.usrs.getUsers().subscribe((data) => {
      for (const item of data) {
        this.users.push(new User(item['Id'], item['DisplayName'], item['Email'], item['PicUrl']));
      }
      console.log(data);
    });
  }

  handleAddFriend($event: any) {
    alert('must add friend user with id ' + $event);
  }
}
