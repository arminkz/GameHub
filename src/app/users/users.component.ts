import { Component, OnInit } from '@angular/core';

import {User} from '../user/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    new User('arminkz', 'arminkz@live.com', ''),
    new User('icesnow', 'ggwp@steam.com', '')
  ];

  constructor() { }

  ngOnInit() {
  }

}
