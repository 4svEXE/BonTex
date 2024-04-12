import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  create(product: Product): Observable<any> {
    return this.http.post<any>('api/product/', product);
  }

  update(id: string, product: Product): Observable<any> {
    return this.http.put<any>('api/product/' + id, product);
  }

  deleteById(id: string): Observable<any> {
    return this.http.delete<any>('api/product/' + 'id');
  }

  getProductById(id: string): Observable<Product> {
    return this.http
      .get('api/product/id/' + id)
      .pipe(map((response: any) => response as Product));
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get('api/product')
      .pipe(map((response: any) => response as Product []));
  }

  getProductsByCategory(category: string): Observable<Product> {
    return this.http
      .get('api/product/category/' + category)
      .pipe(map((response: any) => response as Product));
  }

  findProduct(searchString: string): Observable<Product> {
    return this.http
      .get('api/product/find/' + searchString)
      .pipe(map((response: any) => response as Product));
  }
}
