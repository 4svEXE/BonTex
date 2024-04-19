import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/core/interfaces';
import { ReviewService } from 'src/app/core/services/review.service';
import { ReviewOwlOptions } from 'src/app/core/variables/carouselOptions';

@Component({
  selector: 'app-reviews-home-page',
  templateUrl: './reviews-home-page.component.html',
  styleUrls: ['./reviews-home-page.component.scss'],
})
export class ReviewsHomePageComponent {
  private sub!: Subscription;
  reviews!: Review[];

  customOptions: OwlOptions = ReviewOwlOptions;

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.sub = this.reviewService
      .getReviewsByProductId('0')
      .subscribe((reviews) => {

        console.log(reviews);

        this.reviews = reviews;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
