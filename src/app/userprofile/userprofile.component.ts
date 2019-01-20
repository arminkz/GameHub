import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthService} from '../auth/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  public files: any[];
  url: any;
  displayname: string;

  constructor(private http: HttpClient,
              private auth: AuthService,
              private toast: ToastrService ) {
    this.files = [];
  }

  profilePicUrl = environment.apiUrl + '/api/account/profilepic/';
  updateInfoUrl = environment.apiUrl + '/api/account/update';

  ngOnInit() {
    this.url = environment.apiUrl + '/UserImage/' + this.auth.currentUserValue.picUrl;
    this.displayname = this.auth.currentUserValue.name;
  }

  onSelectFile(event: any) {
    console.log('idi nakhoi');
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.url = reader.result;
        console.log(this.url);
      }
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      this.files = event.target.files;
    }
  }

  onUpload() {
    const params = new HttpParams()
      .append('id',  String(this.auth.currentUserValue.id));
    const formData = new FormData();
    for (const file of this.files) {
      formData.append(name, file, file.name);
    }

    this.http.post(this.profilePicUrl, formData, {params: params})
      .subscribe(
        (data) => {
          this.toast.success('Profile Picture Updated !');
        },
        (error) => this.toast.error('something went wrong')
    );
  }

  onUpdateInfo() {
    const params = new HttpParams()
      .append('id',  String(this.auth.currentUserValue.id))
      .append( 'displayName', this.displayname);

    this.http.post(this.updateInfoUrl, '', {params: params})
      .subscribe(
        (data) => {
          this.toast.success('Account Info Updated !');
        },
        (error) => this.toast.error('something went wrong')
      );
  }

}
