import { Component, Input, EventEmitter, Output } from '@angular/core';
import { SafeSvg } from 'src/app/core/interfaces';

import { Review } from 'src/app/core/interfaces';
import { ReviewService } from 'src/app/core/services/review.service';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent {
  @Input() review!: Review;
  @Input() canDelete = false;
  @Output() isDeleted = new EventEmitter<boolean>();

  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();
  isOpenReview: boolean = false;

  constructor(
    private svgService: SvgService,
    private reviewService: ReviewService
  ) {}

  toggleIsOpenReview() {
    this.isOpenReview = !this.isOpenReview;
  }

  getRatingArray(rating: number): number[] {
    return Array.from({ length: rating }, (_, index) => index + 1);
  }

  getDate() {
    if (!this.review.createdAt) return '';

    return new Date(this.review.createdAt).toLocaleDateString();
  }

  deleteReview() {
    const messages = {
      onDelete: 'Ви впевнені що хочете видалити цей відгук?',
      onSuccess: 'Відгук успішно видалено.',
    };

    if (confirm(messages.onDelete) && this.review?.id) {
      this.reviewService
        .deleteById(this.review.id.toString())
        .subscribe(() => {
          this.isDeleted.emit(true);
          alert(messages.onSuccess);
        });
    }
  }
}
