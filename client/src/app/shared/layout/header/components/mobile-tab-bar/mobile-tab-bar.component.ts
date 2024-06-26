import { Component } from '@angular/core';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';
import { HeaderLinks, LinkInterface } from 'src/app/core/variables/header';

@Component({
  selector: 'app-mobile-tab-bar',
  templateUrl: './mobile-tab-bar.component.html',
  styleUrls: ['./mobile-tab-bar.component.scss'],
})
export class MobileTabBarComponent {
  links: LinkInterface[] = HeaderLinks;
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();
  isClosedSubBar: boolean = true;

  constructor(private svgService: SvgService) {}

  toggleSubBar() {
    return this.isClosedSubBar = !this.isClosedSubBar;
  }
}
