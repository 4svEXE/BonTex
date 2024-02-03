import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'api/user';

  login(username: string, email: string, password: string): Observable<Token> {
    return this.http.post<Token>(this.apiUrl, { username, email, password }).pipe(
      map((token) => {
        // пофіксити приліт токена
        // if (!token.access_token) {
        //   throw new Error('Token error');
        // }
        // localStorage.setItem('user-token', token.access_token);
        console.log('token', token)
        return token;
      }),
      catchError((error) => {
        console.error("connection error", error);
        throw error;
      })
    );
  }
}

interface Token {
  access_token: string;
  // ... інші властивості токену
}
