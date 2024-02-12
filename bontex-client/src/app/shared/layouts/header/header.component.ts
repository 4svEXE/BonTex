import { HeaderLinks } from './../../../core/variables/index';
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
  links: ILink[] = HeaderLinks;

  username = null;


  constructor(public ngxSmartModalService: NgxSmartModalService) {}

  ngOnInit() {
    // Skroll to top the page when navigation
    //window.scrollTo(0, 0);
  }
}
