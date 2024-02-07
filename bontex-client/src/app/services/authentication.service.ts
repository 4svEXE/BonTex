import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

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
export const JWT_NAME = 'user-jwt-token';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private http: HttpClient, private jwtHelperService:JwtHelperService) {}

  login(loginForm: LoginForm): Observable<Token> {
    return this.http
      .post<Token>('api/auth/login', {
        email: loginForm.email,
        password: loginForm.password,
      })
      .pipe(
        map((token) => {
          console.log('token', token);
          localStorage.setItem(JWT_NAME, token.access_token);
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
    return this.http.post<any>('api/user/', user);
  }

  isAuthenticated():boolean {
    const token = localStorage.getItem(JWT_NAME);
    return !this.jwtHelperService.isTokenExpired(token);
  }
}
