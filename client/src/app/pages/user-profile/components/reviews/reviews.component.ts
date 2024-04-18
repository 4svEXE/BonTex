import { Component } from '@angular/core';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss', '../../user-profile.component.scss'],
})
export class ReviewsComponent {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  constructor(private svgService: SvgService) {}
}
