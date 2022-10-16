import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../interface/User.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(username: string | any, password: string | any) {
    return this.httpClient.post<any>(`https://dummyjson.com/auth/login`, { username: username, password: password })
      .pipe(map(user => {
        // login successful if there's a token in the response
        if (user && user.token) {
          // store user details and token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

}
