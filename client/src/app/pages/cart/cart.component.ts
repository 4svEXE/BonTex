import { FavoritesService } from 'src/app/core/services/favorites.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ProductService } from './../../core/services/product.service';
import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem, Product, SafeSvg } from 'src/app/core/interfaces';
import { CartService } from 'src/app/core/services/cart.service';
import { SvgService } from 'src/app/core/services/svg.service';
import { Router } from '@angular/router';
import { UnsavedChangesService } from 'src/app/core/services/unsaved-changes.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnDestroy {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();
  cartSub!: Subscription;
  cartItems: CartItem[] = [];
  totalAmount = 0;
  cartItemsSubscription: Subscription;
  totalAmountSubscription: Subscription;
  isItemMenuOpen = false;
  unloadMessage =
    'Ви впевнені, що хочете залишити сторінку? Ваша корзина очиститься.';

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private cartService: CartService,
    private productService: ProductService,
    private svgService: SvgService,
    private favService: FavoritesService,
    private router: Router,
    private unsavedChangesService: UnsavedChangesService
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
        if(amount){
          this.updateUnloadMessage(this.unloadMessage);
        }
      });

    this.cartService.updateCartItems(
      this.cartService.getCartItems().getValue()
    );
  }

  ngOnInit() {
    this.cartSub = this.cartService.getIsOpenCart().subscribe((isOpenCart) => {
      if (isOpenCart) {
        this.ngxSmartModalService.getModal('cartModal').open();
      } else {
        this.ngxSmartModalService.getModal('cartModal').close();
      }
    });
  }

  updateUnloadMessage(message: string) {
    this.unsavedChangesService.setMessage(message);
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

      if (
        qty > 0 &&
        qty <= product?.quantity_in_stock &&
        product?.isAvailable
      ) {
        this.cartService.setCartItemQuantity(item, qty);
      }
    });
  }

  getTotalProductAmount(item: CartItem) {
    return item.quantity * item.price;
  }

  getTotalProductOldAmount(item: CartItem): number | undefined {
    if (!item.oldPrice) return;

    return item.quantity * item.oldPrice;
  }

  toggleFav(productId: string) {
    this.favService.toggleProductById(productId);
  }

  isFavorite(productId: string): boolean {
    return this.favService.isFavoriteById(productId);
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeCartItem(item);
  }

  setIsItemMenuOpen(isOpen: boolean) {
    this.isItemMenuOpen = isOpen;
  }

  backToShopping() {
    this.cartService.setIsOpenCart(false);
  }

  navigateToCheckout() {
    this.cartService.setIsOpenCart(false);

    if (this.cartItems.length > 0) {
      this.router.navigate(['/checkout']);
    }
  }
}
