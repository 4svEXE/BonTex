import { Component, Input } from '@angular/core';
import { Product, SafeSvg } from 'src/app/core/interfaces';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() product!: Product;
  safeSvg: SafeSvg = this.svg.getSafeSvgCodes();
  options = {
    size: '',
  };
  isFavorite: boolean = false;

  constructor(private svg: SvgService, private favService: FavoritesService) {}

  ngOnInit() {
    this.initOptions();
    this.isFavorite = this.favService.isFavorite(this.product);
  }

  initOptions() {
    this.options = {
      size: this.product.sizes[0].size,
    };
  }

  onBuy() {}

  onFastShipping() {}

  toggleFavorite() {
    this.favService.toggleProduct(this.product);
    this.isFavorite = this.favService.isFavorite(this.product);
  }
}
