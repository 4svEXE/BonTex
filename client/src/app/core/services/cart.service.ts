import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  private totalAmountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  getCartItems(): BehaviorSubject<CartItem[]> {
    return this.cartItemsSubject;
  }

  getTotalAmount(): BehaviorSubject<number> {
    return this.totalAmountSubject;
  }

  updateCartItems(cart: CartItem[]) {
    this.cartItemsSubject.next(cart);
    this.updateTotalAmount(cart);
  }

  private updateTotalAmount(cart: CartItem[]) {
    const totalAmount = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    this.totalAmountSubject.next(totalAmount);
  }

  getCartLength() {
    return this.cartItemsSubject.pipe(
      map(cart => cart.length)
    );
  }

  removeCartItem(item: CartItem) {
    const currentCart = this.cartItemsSubject.value;
    const updatedCart = currentCart.filter(cartItem => cartItem.id !== item.id);
    this.updateCartItems(updatedCart);
  }

  getCartItemQuantity(item: CartItem): number {
    const cartItem = this.cartItemsSubject.value.find(cartItem => cartItem.id === item.id);
    return cartItem ? cartItem.quantity : 0;
  }

  setCartItemQuantity(item: CartItem, quantity: number) {
    const currentCart = this.cartItemsSubject.value;
    const updatedCart = currentCart.map(cartItem => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity };
      }
      return cartItem;
    });
    this.updateCartItems(updatedCart);
  }

  addCartItem(cartItem: CartItem) {
    const currentCart = this.cartItemsSubject.value;
    const existingItem = currentCart.find(item => item.id === cartItem.id);
    if (existingItem) {
      existingItem.quantity += cartItem.quantity;
    } else {
      currentCart.push(cartItem);
    }
    this.updateCartItems(currentCart);
  }
}
