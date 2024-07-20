import { ProductService } from './../../core/services/product.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem, Product } from 'src/app/core/interfaces';
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

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.cartItemsSubscription = this.cartService
      .getCartItems()
      .subscribe((items) => {
        this.cartItems = items;
      });

    this.totalAmountSubscription = this.cartService
      .getTotalAmount()
      .subscribe((amount) => {
        this.totalAmount = amount;
      });

    this.cartService.updateCartItems(
      this.cartService.getCartItems().getValue()
    );
  }

  ngOnDestroy() {
    this.cartItemsSubscription.unsubscribe();
    this.totalAmountSubscription.unsubscribe();
  }

  removeCartItem(item: CartItem) {
    this.cartService.removeCartItem(item);
  }

  setCartItemQuantity(item: CartItem, num: number) {
    const qty = this.cartService.getCartItemQuantity(item) + num;
    let product!: Product;

    this.productService.getProductById(item.id).subscribe((p) => {
      console.log(p, item)
      product = p;
    });

    console.log(qty, product)

    if (qty > 0 && qty <= product?.quantity_in_stock && product?.isAvailable) {
      this.cartService.setCartItemQuantity(item, qty);
    }
  }
}
