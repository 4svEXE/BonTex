import { NgxSmartModalService } from 'ngx-smart-modal';
import { ProductService } from './../../core/services/product.service';
import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem, Product } from 'src/app/core/interfaces';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnDestroy {
  cartSub!: Subscription;
  cartItems: CartItem[] = [];
  totalAmount = 0;
  cartItemsSubscription: Subscription;
  totalAmountSubscription: Subscription;

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.cartItemsSubscription = this.cartService
      .getCartItems()
      .subscribe((items) => {
        this.cartItems = items;
        console.log('cartItems :>> ', items);
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

  ngOnInit() {
    this.cartSub = this.cartService.getIsOpenCart().subscribe((isOpenCart) => {
      if(isOpenCart){
        this.ngxSmartModalService.getModal('cartModal').open();
      } else {
        this.ngxSmartModalService.getModal('cartModal').close();
      }
    });
  }

  ngOnDestroy() {
    this.cartItemsSubscription.unsubscribe();
    this.totalAmountSubscription.unsubscribe();
    this.cartSub.unsubscribe();
  }

  removeCartItem(item: CartItem) {
    this.cartService.removeCartItem(item);
  }

  setCartItemQuantity(item: CartItem, num: number) {
    const qty = this.cartService.getCartItemQuantity(item) + num;
    let product!: Product;

    this.productService.getProductById(item.id).subscribe((p) => {
      product = p;
    });

    console.log(qty, product);

    if (qty > 0 && qty <= product?.quantity_in_stock && product?.isAvailable) {
      this.cartService.setCartItemQuantity(item, qty);
    }
  }
}
