import { Component } from '@angular/core';
import { ILink } from '../../../../app/core/interfaces';
import { Router, NavigationEnd } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  imgPath: string = 'assets/img/shared/layout/';

  isActiveHeader: boolean = false;

  username = null

  links: ILink[] = [
    { title: 'Акції', path: '/sales' },
    { title: 'Доставка та оплата', path: '/prices' },
    { title: 'Обмін та повернення', path: '/help' },
    { title: 'Про нас', path: '/help' },
    { title: 'Update profile', path: '/update-profile' },
  ];

  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit() {
    // Skroll to top the page when navigation
    //window.scrollTo(0, 0);
  }
}
