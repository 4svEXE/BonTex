import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/core/interfaces';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnDestroy {
  cartItems: CartItem[] = [];
  totalAmount = 0;
  cartItemsSubscription: Subscription;
  totalAmountSubscription: Subscription;

  constructor(private cartService: CartService) {
    this.cartItemsSubscription = this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });

    this.totalAmountSubscription = this.cartService.getTotalAmount().subscribe((amount) => {
      this.totalAmount = amount;
    });

    this.cartService.updateCartItems(this.cartService.getCartItems().getValue());

  }

  ngOnDestroy() {
    this.cartItemsSubscription.unsubscribe();
    this.totalAmountSubscription.unsubscribe();
  }

  removeCartItem(item: CartItem) {
    this.cartService.removeCartItem(item);
  }

  setCartItemQuantity(item: CartItem, num: number) {
    const qty = this.cartService.getCartItemQuantity(item);
    this.cartService.setCartItemQuantity(item, qty + num);
  }
}
