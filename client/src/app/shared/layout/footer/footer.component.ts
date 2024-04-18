import { Component } from '@angular/core';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';
import { Sections } from 'src/app/core/variables/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();
  sections = Sections;

  constructor(private svgService: SvgService) {}

  navBars = [{ active: false }, { active: false }, { active: false }];

  toggleActiveNavBox(id: number) {
    this.navBars[id].active = !this.navBars[id].active;
  }
}
