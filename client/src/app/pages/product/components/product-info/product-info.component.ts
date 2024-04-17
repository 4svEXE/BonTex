import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/interfaces';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent {
  @Input() product!: Product;

  safeSvgCodes: { [key: string]: SafeHtml } = this.svgService.getSafeSvgCodes();

  headerNavs = [
    { label: 'Опис', link: 'description' },
    { label: 'Оплата', link: 'payment' },
    { label: 'Повернення та обмін', link: 'returns-exchanges' },
    { label: 'Доставка', link: 'delivery' },
    { label: 'Відгуки', link: 'reviews' },
  ];
  currentNav = 'description';

  reviews = 0;

  constructor(private svgService: SvgService) {}

  setCurrentNav(nav: string) {
    this.currentNav = nav;
  }
}
