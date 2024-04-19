import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product, Review } from 'src/app/core/interfaces';
import { ReviewService } from 'src/app/core/services/review.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
})
export class ProductReviewsComponent {
  @Input() product!: Product;

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
      .getReviewsByProductId(this.product.id)
      .subscribe((reviews) => {
        console.log(reviews);

        this.reviews = reviews;
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
