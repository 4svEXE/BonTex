import { Component, Input } from '@angular/core';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';
import { Product } from 'src/app/core/variables';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;

  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  localiseGroups: {[key: string]: string} = {
    hit: 'Хіт',
    new: 'Новинка',
    promotion: 'Акція',
    recomendation: 'Рекомендовано'
  }

  constructor(private svgService: SvgService) {}

  isFav: boolean = false;

  toggleFavorite() {
    this.isFav = !this.isFav;
  }
}
