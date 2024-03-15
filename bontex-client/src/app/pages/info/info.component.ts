import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  isActive = false;

  navigationItems = [
    { label: 'Каталог', route: 'catalog-info' },
    { label: 'Доставка та оплата', route: 'delivery-and-payments' },
    { label: 'Обмін та повернення', route: 'exchange-and-returns' },
    { label: 'Про нас', route: 'about-us' },
    { label: 'Контакти', route: 'contacts' },
    { label: 'Угода користувача', route: 'user-agreement' },
    { label: 'Питання та відповіді', route: 'faq' },
    { label: 'Відгуки про магазин', route: 'store-reviews' },
  ];
}
