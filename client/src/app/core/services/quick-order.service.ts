import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { QuickOrder } from '../interfaces';


@Injectable({
  providedIn: 'root',
})
export class QuickOrdertService {
  constructor(private http: HttpClient) {}

  create(quickOrder: QuickOrder): Observable<any> {
    return this.http.post<any>('api/quick-order/', quickOrder);
  }

  update(id: string, quickOrder: QuickOrder): Observable<any> {
    return this.http.put<any>('api/quick-order/' + id, quickOrder);
  }

  deleteById(id: string): Observable<any> {
    return this.http.delete<any>('api/quick-order/' + id);
  }

  getById(id: string): Observable<QuickOrder> {
    return this.http
      .get('api/quick-order/id/' + id)
      .pipe(map((response: any) => response as QuickOrder));
  }

  getAll(): Observable<QuickOrder[]> {
    return this.http
      .get('api/quick-order')
      .pipe(map((response: any) => response as QuickOrder[]));
  }
}
