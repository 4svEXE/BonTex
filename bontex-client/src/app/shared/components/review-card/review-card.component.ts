import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/shared/services/svg.service';
import { Review } from './../../../core/interfaces/index';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent {
  @Input() review!: Review;

  safeSvgCodes: { [key: string]: SafeHtml } = {};
  isOpenReview: boolean = false;

  constructor(private svgService: SvgService) {}

  ngOnInit(): void {
    this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }

  toggleIsOpenReview() {
    this.isOpenReview = !this.isOpenReview;
  }

  getRatingArray(rating: number): number[] {
    return Array.from({ length: rating }, (_, index) => index + 1);
  }
}
