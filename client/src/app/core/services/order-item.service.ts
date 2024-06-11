import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { OrderItem } from '../interfaces';


@Injectable({
  providedIn: 'root',
})
export class OrderItemItemService {
  constructor(private http: HttpClient) {}

  create(orderItem: OrderItem): Observable<any> {
    return this.http.post<any>('api/order-item/', orderItem);
  }

  update(id: string, orderItem: OrderItem): Observable<any> {
    return this.http.put<any>('api/order-item/' + id, orderItem);
  }

  deleteById(id: string): Observable<any> {
    return this.http.delete<any>('api/order-item/' + id);
  }

  getById(id: string): Observable<OrderItem> {
    return this.http
      .get('api/order-item/id/' + id)
      .pipe(map((response: any) => response as OrderItem));
  }

  getAll(): Observable<OrderItem[]> {
    return this.http
      .get('api/order-item')
      .pipe(map((response: any) => response as OrderItem[]));
  }
}
