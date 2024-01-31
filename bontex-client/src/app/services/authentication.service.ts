import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'http://localhost:3000/users/login';

  login(email: string, password: string) {
    return this.http.post<any>(this.apiUrl, { email, password }).pipe(
      map((token) => {
        localStorage.setItem('user-token', token.accets_token);
        return token;
      })
    );
  }
}
