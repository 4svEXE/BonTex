import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/interfaces';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent {
  @Input() product!: Product;

  headerNavs = [
    { label: 'Опис', link: 'description' },
    { label: 'Оплата', link: 'payment' },
    { label: 'Повернення та обмін', link: 'returns-exchanges' },
    { label: 'Доставка', link: 'delivery' },
    { label: 'Відгуки', link: 'reviews' }
  ];
  currentNav = 'description';

  reviews = 0

  setCurrentNav(nav: string) {
    this.currentNav = nav;
  }
}
