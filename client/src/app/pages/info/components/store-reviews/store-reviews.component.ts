import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { Review } from 'src/app/core/interfaces';
import { ReviewService } from 'src/app/core/services/review.service';
@Component({
  selector: 'app-store-reviews',
  templateUrl: './store-reviews.component.html',
  styleUrls: ['./store-reviews.component.scss', '../../info.component.scss'],
})
export class StoreReviewsComponent {
  private sub!: Subscription;
  reviews!: Review[];

  paginateConfig = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0,
  };

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    this.sub = this.reviewService
      .getReviewsByProductId('0')
      .subscribe((reviews) => {
        this.reviews = reviews.reverse();
      });
  }

  pageChangeEvent(event: number) {
    this.paginateConfig.currentPage = event;
    this.reviews;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
