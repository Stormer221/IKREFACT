import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken() {
    return btoa('Guest:Password');
  }

  public setAuth() {

  }
}
