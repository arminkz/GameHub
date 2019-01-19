import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from './user.model';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl + '/api/users/';

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }
}
