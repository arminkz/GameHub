import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from './user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:56608/api/users/';

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }
}
