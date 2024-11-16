import { Injectable } from '@angular/core';
import { Product } from '../interfaces';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private subs!: Subscription[];
  private counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );

  constructor(private productService: ProductService) {
    this.setCouner(this.getProducts().length);
  }

  getCounter(): BehaviorSubject<number> {
    return this.counterSubject;
  }

  setCouner(value: number) {
    this.counterSubject.next(value);
  }

  getProducts(): Product[] {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  setProducts(products: Product[]) {
    localStorage.setItem('favorites', JSON.stringify(products));
  }

  addProduct(product: Product) {
    let favorites = this.getProducts();
    favorites.push(product);
    this.setProducts(favorites);

    this.setCouner(favorites.length);
  }

  removeProduct(product: Product) {
    let favorites = this.getProducts();
    favorites = favorites.filter((p) => p.id !== product.id);
    this.setProducts(favorites);

    this.setCouner(favorites.length);
  }

  isFavorite(product: Product): boolean {
    let favorites = this.getProducts();
    return favorites.some((p) => p.id === product.id);
  }

  isFavoriteById(productId: string): boolean {
    let favorites = this.getProducts();
    return favorites.some((p) => p.id === productId);
  }

  toggleProduct(product: Product) {
    if (!this.isFavorite(product)) {
      this.addProduct(product);
    } else {
      this.removeProduct(product);
    }
  }

  toggleProductById(productId: string) {
    const productSub = this.productService
      .getProductById(productId)
      .subscribe((product) => {
        this.toggleProduct(product);
        productSub.unsubscribe();
      });
  }



}
