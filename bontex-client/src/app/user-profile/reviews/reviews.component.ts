import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/shared/services/svg.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  safeSvgCodes: { [key: string]: SafeHtml } = {};

  constructor(private svgService: SvgService) {}

  ngOnInit(): void {
    this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }
}
