import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DeliveryInfo } from '../interfaces';


@Injectable({
  providedIn: 'root',
})
export class DeliveryInfoService {
  constructor(private http: HttpClient) {}

  create(info: DeliveryInfo): Observable<any> {
    return this.http.post<any>('api/delivery-info/', info);
  }

  getByDeliveryId(id: string): Observable<DeliveryInfo> {
    return this.http
      .get('api/delivery-info/id/' + id)
      .pipe(map((response: any) => response as DeliveryInfo));
  }

  // update(id: string, order: DeliveryInfo): Observable<any> {
  //   return this.http.put<any>('api/order/' + id, order);
  // }

  // deleteById(id: string): Observable<any> {
  //   return this.http.delete<any>('api/order/' + id);
  // }



  // getAll(): Observable<DeliveryInfo[]> {
  //   return this.http
  //     .get('api/order')
  //     .pipe(map((response: any) => response as DeliveryInfo[]));
  // }
}
