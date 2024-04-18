import { Component } from '@angular/core';

import { Review } from 'src/app/core/interfaces';
import { Reviews } from 'src/app/core/variables';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
})
export class ProductReviewsComponent {
  reviews: Review[] = Reviews;

  // p: number = 1;
  // total: number = 0;
  paginateConfig = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0,
  };

  pageChangeEvent(event: number) {
    this.paginateConfig.currentPage = event;
    this.reviews;
  }
}
