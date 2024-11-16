import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Order } from '../interfaces';


@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  create(order: Order): Observable<any> {
    return this.http.post<any>('api/order/', order);
  }

  update(id: string, order: Order): Observable<any> {
    return this.http.put<any>('api/order/' + id, order);
  }

  deleteById(id: string): Observable<any> {
    return this.http.delete<any>('api/order/' + id);
  }

  getById(id: string): Observable<Order> {
    return this.http
      .get('api/order/id/' + id)
      .pipe(map((response: any) => response as Order));
  }

  getAll(): Observable<Order[]> {
    return this.http
      .get('api/order')
      .pipe(map((response: any) => response as Order[]));
  }
}
