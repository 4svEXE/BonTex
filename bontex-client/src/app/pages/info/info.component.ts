import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  isActive = false

  navigationItems = [
    { label: 'Особисті дані', view: 'private-dates' },
    { label: 'Пароль', view: 'password' },
    { label: 'Мої замовлення', view: 'orders' },
    { label: 'Обрані товари', view: 'selected', showCounter: true, counter: 2 },
    { label: 'Мої відгуки', view: 'reviews', showCounter: true, counter: 2 },
    { label: 'Вихід', view: 'logout' },
  ];

}
