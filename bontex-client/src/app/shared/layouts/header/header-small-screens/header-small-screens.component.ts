import { Component, HostListener } from '@angular/core';

import { HeaderLinks } from './../../../../core/variables/index';
import { ILink } from './../../../../core/interfaces/index';

@Component({
  selector: 'app-header-small-screens',
  templateUrl: './header-small-screens.component.html',
  styleUrls: ['./header-small-screens.component.scss'],
})
export class HeaderSmallScreensComponent {
  isActiveContacts: boolean = true;
  isFixed: boolean = false;
  imgPath: string = 'assets/img/shared/layout/';
  links: ILink[] = HeaderLinks;

  ngOnInit() {}

  isActiveContactsToggle() {
    this.isActiveContacts = !this.isActiveContacts;
  }

  // For sticky scrolling in the header
  // Listen for the window scroll event
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    // Calculate the scroll position
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isFixed = scrollPosition > 50;
  }
}
