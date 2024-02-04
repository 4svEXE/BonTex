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

  // isActivePopup: boolean = false;
  // currentPopup: string = "login";
  isActiveHeader: boolean = false;

  links: ILink[] = [
    { title: 'Акції', path: '/sales' },
    { title: 'Доставка та оплата', path: '/prices' },
    { title: 'Обмін та повернення', path: '/help' },
    { title: 'Про нас', path: '/help' },
  ];

  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }

  // constructor(
  //   private headerService: HeaderService,
  //   private popupService: PopupService,
  //   private router: Router
  // ) {
  //   this.popupService.data$.subscribe((data: any) => {
  //     this.isActivePopup = data.isActivePopup;
  //     this.currentPopup = data.currentPopup;
  //   });

  //   this.headerService.isActiveHeader$.subscribe((state: any) => {
  //     this.isActiveHeader = state;
  //   });
  // }

  // togglePopup() {
  //   this.popupService.sendData({
  //     isActivePopup: !this.isActivePopup,
  //     currentPopup: this.currentPopup,
  //   });
  // }

  ngOnInit() {
    // Skroll to top the page when navigation
    //window.scrollTo(0, 0);
  }
}
