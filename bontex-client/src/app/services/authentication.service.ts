import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface LoginForm {
  email: string;
  password: string;
}
export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}
export interface Token {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'api/auth/';

  login(loginForm: LoginForm): Observable<Token> {
    return this.http
      .post<Token>(this.apiUrl + 'login', {
        email: loginForm.email,
        password: loginForm.password,
      })
      .pipe(
        map((token) => {
          console.log('token', token);
          localStorage.setItem('user-token', token.access_token);
          return token;
        }),
        catchError((error) => {
          console.error('connection error', error);
          throw error;
        })
      );
  }

  register(user: User) {
    console.log('user', user);
    return this.http.post<any>(this.apiUrl, user);
  }

  isAuthenticated() {
    const token = localStorage.getItem('user-token');
  }
}
