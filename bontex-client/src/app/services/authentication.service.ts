import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface LoginForm {
  email: string;
  password: string;
}
export interface User {
  user: string;
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

  apiUrl: string = 'api/user/';

  login(loginForm: LoginForm): Observable<Token> {
    return this.http
      .post<Token>(this.apiUrl + 'login', {
        email: loginForm.email,
        password: loginForm.password,
      })
      .pipe(
        map((token) => {
          console.log('token', token);
          return token;
        }),
        catchError((error) => {
          console.error('connection error', error);
          throw error;
        })
      );
  }

  register(user: User) {
    return this.http.post<any>(this.apiUrl, user);
  }
}

