import {ToastrService} from 'ngx-toastr';
import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {User} from '../user/user.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService implements OnInit {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private toastr: ToastrService,
              private router: Router,
              private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
    return (this.currentUserValue != null);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    const params = new HttpParams()
      .append('email', email)
      .append('password', password);

    this.http.post<User>(environment.apiUrl + '/api/login/', '' , {params: params} )
      .subscribe(
        (data: User) => {
          console.log(data);
          this.currentUserSubject.next(data);
          // save in local storage
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.toastr.success('Logged in Successfully !');
        },
        (error) => this.toastr.error(error.message)
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.toastr.info('Logged out !');
  }

  username(): string {
    return this.currentUserValue.name;
  }

  signup(name: string, email: string, password: string) {
    const params = new HttpParams()
      .append('name', name)
      .append('email', email)
      .append('password', password);

    this.http.post<User>(environment.apiUrl + '/api/register/', '' , {params: params} )
      .subscribe(
        (data) => this.toastr.success('Registered Successfully !'),
        (error) => this.toastr.error(error.message)
      );
  }

  hasAdminRights(): boolean {
    return this.currentUserSubject.value.role === 'admin';
  }

}
