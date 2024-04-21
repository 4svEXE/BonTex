import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Review, SafeSvg } from 'src/app/core/interfaces';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ReviewService } from 'src/app/core/services/review.service';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss', '../../user-profile.component.scss'],
})
export class ReviewsComponent {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  private sub!: Subscription;
  reviews!: Review[];

  paginateConfig = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0,
  };

  constructor(
    private svgService: SvgService,
    private reviewService: ReviewService,
    private AuthService: AuthenticationService
  ) {}

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    this.sub = this.AuthService.getUserId().subscribe((userId) => {
      this.reviewService.getReviewsByUserId(userId).subscribe((reviews) => {
        console.log(reviews);
        this.reviews = reviews;
      });
    });
  }

  pageChangeEvent(event: number) {
    this.paginateConfig.currentPage = event;
    this.reviews;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onDeleteReview() {
    this.getReviews();
  }
}
