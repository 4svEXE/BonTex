import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem, Order, OrderItem, DeliveryInfo } from './../../../core/interfaces/index';

import { CartService } from './../../../core/services/cart.service';
import { User, UserService } from './../../../core/services/user.service';
import { OrderService } from './../../../core/services/order.service';
import { OrderItemService } from 'src/app/core/services/order-item.service';
import { DeliveryInfoService } from 'src/app/core/services/delivery-info.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  private subs: Subscription[] = [];
  private user!: User;
  private cart!: CartItem[];

  // Order, OrderItem, DeliveryInfo

  constructor(
    private userService: UserService,
    private cartService: CartService,
    private orderService: OrderService,
    private orderItemService: OrderItemService,
    private deliveryInfoService: DeliveryInfoService,
  ) {}

  ngOnInit() {
    this.getCart();
    this.getUser();
  }

  getCart() {
    const cartSub = this.cartService
      .getCartItems()
      .subscribe((cart: CartItem[]) => {
        console.log('cart :>> ', cart);
        this.cart = cart;
      });

    this.subs.push(cartSub);
  }

  getUser() {
    const userId = this.userService.getUserIdFromLS();

    if (!userId) {
      console.error('User ID not found in local storage');
      return;
    }

    const userSub = this.userService.findOne(userId).subscribe((user: User) => {
      console.log('user :>> ', user);
      this.user = user;
    });

    this.subs.push(userSub);
  }

  OnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
