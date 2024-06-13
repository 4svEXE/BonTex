import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );

  constructor() {}

  getCounter(): BehaviorSubject<number> {
    return this.counterSubject;
  }

  setCouner(value: number) {
    this.counterSubject.next(value);
  }

  getCartItems(): CartItem[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  setCartItems(products: CartItem[]) {
    localStorage.setItem('cart', JSON.stringify(products));
  }

  addProduct(product: CartItem) {
    let cart = this.getCartItems();
    cart.push(product);
    this.setCartItems(cart);

    this.setCouner(cart.length);
  }

  removeProduct(product: CartItem) {
    let cart = this.getCartItems();
    cart = cart.filter((p) => p.id !== product.id);
    this.setCartItems(cart);

    this.setCouner(cart.length);
  }

  isFavorite(product: CartItem): boolean {
    let cart = this.getCartItems();
    return cart.some((p) => p.id === product.id);
  }

  toggleProduct(product: CartItem) {
    if (!this.isFavorite(product)) {
      this.addProduct(product);
    } else {
      this.removeProduct(product);
    }
  }
}
