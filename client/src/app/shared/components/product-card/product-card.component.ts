import { Component, Input } from '@angular/core';
import { Product, SafeSvg } from 'src/app/core/interfaces';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;

  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  localiseGroups: { [key: string]: string } = {
    hit: 'Хіт',
    new: 'Новинка',
    promotion: 'Акція',
    recomendation: 'Рекомендовано',
  };

  constructor(
    private svgService: SvgService,
    private favService: FavoritesService
  ) {}

  isFav: boolean = false;

  ngOnInit() {
    this.isFav = this.favService.isFavorite(this.product);
  }

  toggleFavorite() {
    this.favService.toggleProduct(this.product);
    this.isFav = this.favService.isFavorite(this.product);
  }
}
