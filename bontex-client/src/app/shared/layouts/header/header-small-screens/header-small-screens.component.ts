import { Component } from '@angular/core';
import { HeaderLinks } from './../../../../core/variables/index';
import { ILink } from './../../../../core/interfaces/index';

@Component({
  selector: 'app-header-small-screens',
  templateUrl: './header-small-screens.component.html',
  styleUrls: ['./header-small-screens.component.scss'],
})
export class HeaderSmallScreensComponent {
  imgPath: string = 'assets/img/shared/layout/';
  links: ILink[] = HeaderLinks;

  ngOnInit() {

  }
}
