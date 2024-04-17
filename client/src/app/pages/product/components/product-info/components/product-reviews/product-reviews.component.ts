import { Component } from '@angular/core';

import { Review } from 'src/app/core/interfaces';
import { Reviews } from 'src/app/core/variables';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss'],
})
export class ProductReviewsComponent {
  reviews: Review[] = Reviews;

  p: number = 1;
  total: number = 0;
  paginateConfig = {
    itemsPerPage: 5,
    currentPage: this.p,
    totalItems: this.total,
  };

  pageChangeEvent(event: number) {
    this.p = event;
    this.reviews;
  }
}
