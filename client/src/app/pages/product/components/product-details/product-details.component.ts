import { Component, Input } from '@angular/core';
import { Product, SafeSvg } from 'src/app/core/interfaces';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { CartService } from 'src/app/core/services/cart.service';
import { SvgService } from 'src/app/core/services/svg.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import {CartItem} from'src/app/core/interfaces';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() product!: Product;
  safeSvg: SafeSvg = this.svg.getSafeSvgCodes();
  options = {size: ''};
  productQuantity = 1
  isFavorite: boolean = false;

  constructor(
    private svg: SvgService,
    private favService: FavoritesService,
    private cartService: CartService,
    public ngxSmartModalService: NgxSmartModalService
  ) {}

  ngOnInit() {
    this.initOptions();
    this.isFavorite = this.favService.isFavorite(this.product);
  }

  initOptions() {
    this.options = {
      size: this.product.sizes[0].size,
    };
  }

  onBuy() {
    const cartItem: CartItem = {
      id: this.product.id,
      quantity: this.productQuantity,
      price: this.product.currentPrice,
      options: this.options,
    }
    this.cartService.addCartItem(cartItem);
    this.ngxSmartModalService.getModal('cartModal').open()
  }

  onFastShipping() {
    this.ngxSmartModalService.getModal('quickOrder').open()
  }

  toggleFavorite() {
    this.favService.toggleProduct(this.product);
    this.isFavorite = this.favService.isFavorite(this.product);
  }
}
