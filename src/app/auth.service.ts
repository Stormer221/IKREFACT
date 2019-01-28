import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public getToken() {
    return btoa('Guest:Guest');
  }

  public loginUser() {
    // return this.http.post<User>()
  }

}
