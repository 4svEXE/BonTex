import { Component, Input } from '@angular/core';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';
import { HeaderLinks, LinkInterface } from 'src/app/core/variables/header';

@Component({
  selector: 'app-nav-sub-menu',
  templateUrl: './nav-sub-menu.component.html',
  styleUrls: ['./nav-sub-menu.component.scss']
})
export class NavSubMenuComponent {
  @Input() links: LinkInterface[] = HeaderLinks;
  @Input() isClosed: boolean = true;


  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();


  constructor(private svgService: SvgService) {}

  toggleSubBar() {
    this.isClosed = !this.isClosed;
  }
}
