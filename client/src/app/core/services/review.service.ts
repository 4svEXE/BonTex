import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Review } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  create(review: Review): Observable<any> {
    return this.http.post<any>('api/review/', review);
  }

  update(id: string, review: Review): Observable<any> {
    return this.http.put<any>('api/review/' + id, review);
  }

  deleteById(id: string): Observable<any> {
    return this.http.delete<any>('api/review/' + id);
  }

  getReviewById(id: string): Observable<Review> {
    return this.http
      .get('api/review/id/' + id)
      .pipe(map((response: any) => response as Review));
  }

  getReviews(): Observable<Review[]> {
    return this.http
      .get('api/review')
      .pipe(map((response: any) => response as Review[]));
  }

  getReviewsByUserId(userId: string): Observable<Review[]> {
    return this.http
      .get('api/review/user/' + userId)
      .pipe(map((response: any) => response as Review[]));
  }

  getReviewsByProductId(productId: string): Observable<Review[]> {
    return this.http
      .get('api/review/product/' + productId)
      .pipe(map((response: any) => response as Review[]));
  }

  getReviewsCountByProductId(productId: string): Observable<number> {
    return this.http
      .get('api/review/product/' + productId)
      .pipe(map((response: any) => response.length as number));
  }
}
