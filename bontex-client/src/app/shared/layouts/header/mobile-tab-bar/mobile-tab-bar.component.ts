import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HeaderLinks } from './../../../../core/variables/index';
import { ILink } from './../../../../core/interfaces/index';
import { SvgService } from 'src/app/shared/services/svg.service';

@Component({
  selector: 'app-mobile-tab-bar',
  templateUrl: './mobile-tab-bar.component.html',
  styleUrls: ['./mobile-tab-bar.component.scss'],
})
export class MobileTabBarComponent {
  links: ILink[] = HeaderLinks;
  safeSvgCodes: { [key: string]: SafeHtml } = {};
  isClosedSubBar: boolean = true;

  constructor(
    private sanitizer: DomSanitizer,
    private svgService: SvgService
  ) {}

  ngOnInit(): void {
    this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }

  toggleSubBar(){
    this.isClosedSubBar = !this.isClosedSubBar;
  }
}
