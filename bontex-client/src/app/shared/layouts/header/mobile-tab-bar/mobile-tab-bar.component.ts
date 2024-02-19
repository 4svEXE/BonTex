import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HeaderLinks } from './../../../../core/variables/index';
import { ILink } from './../../../../core/interfaces/index';
import { svgImages } from 'src/app/shared/svg';


@Component({
  selector: 'app-mobile-tab-bar',
  templateUrl: './mobile-tab-bar.component.html',
  styleUrls: ['./mobile-tab-bar.component.scss'],
})
export class MobileTabBarComponent {
  svg = svgImages.tabBar;
  links: ILink[] = HeaderLinks;
  safeSvgCode!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}


  ngOnInit() {
    this.safeSvgCode = this.sanitizer.bypassSecurityTrustHtml(this.svg.home);
  }
}
