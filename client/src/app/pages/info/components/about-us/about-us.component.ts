import { Component } from '@angular/core';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss', '../../info.component.scss'],
})
export class AboutUsComponent {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  constructor(private svgService: SvgService) {}
}
