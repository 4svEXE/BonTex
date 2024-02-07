import { JWT_NAME } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(JWT_NAME);

    if (token) {
      const clonedReq = request.clone({
        headers: request.headers.set('Authorisation', 'bearer' + token),
      });

      console.log('cloned')

      return next.handle(clonedReq);
    }
    return next.handle(request);
  }
}
