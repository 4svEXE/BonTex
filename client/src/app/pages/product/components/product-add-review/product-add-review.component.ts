import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Review, SafeSvg } from 'src/app/core/interfaces';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { SvgService } from 'src/app/core/services/svg.service';
import { UserService } from 'src/app/core/services/user.service';
import { CustomErrorMessages } from 'src/app/core/variables/customFormsErrors';
import { User } from '../../../../core/services/authentication.service';
import { ReviewService } from 'src/app/core/services/review.service';

@Component({
  selector: 'app-product-add-review',
  templateUrl: './product-add-review.component.html',
  styleUrls: ['./product-add-review.component.scss'],
})
export class ProductAddReviewComponent {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();
  errorMessages = CustomErrorMessages;

  user!: User;
  rating = 5;
  isSendetReview = false;

  formGroup;

  modalMsg = {
    title: 'Дякуємо!',
    text: 'Ваш відгук опубліковано.',
  };

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    public authService: AuthenticationService,
    public reviewService: ReviewService,
    private userService: UserService,
    private router: Router,
    private svgService: SvgService
  ) {
    this.formGroup = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(28),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
        Validators.maxLength(32),
      ]),
      review: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(400),
      ]),
      rating: new FormControl(5, [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]),
      userId: new FormControl(''),
      productId: new FormControl(''),
    });
  }

  ngOnInit() {
    this.isLogined();
  }

  ngOnChanges() {
    this.isLogined();
  }

  isLogined() {
    if (this.authService.isAuthenticated()) {
      this.authService.getUserId().subscribe((id) => {
        this.userService.findOne(id).subscribe((user) => {
          this.user = user;

          this.formGroup.patchValue({
            userId: user.id,
            productId: this.router.url.split('/')[3],
          });

          // dont works because of change detection
          this.formGroup.patchValue({
            username: this.user.username,
            email: this.user.email,
          });
        });
      });
    }
  }

  setRating(i: number) {
    this.formGroup.get('rating')?.setValue(i);
  }

  getRating() {
    return this.formGroup.get('rating')?.value || 5;
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.valid) {
      let fg = this.formGroup.value;
      let review: Review = {
        username: fg.username || '',
        email: fg.email || '',
        userId: fg.userId || '',
        productId: fg.productId || '',
        review: fg.review || '',
        rating: fg.rating || 5,
      };

      this.reviewService.create(review).subscribe(() => {
        this.isSendetReview = true;
      });
    }
  }

  openModal() {
    this.ngxSmartModalService.open('notificationModal');
  }

  isFakeSending = true;
  fakeSending() {
    setTimeout(() => {
      this.isFakeSending = false;
      this.openModal()
    }, 6000);
  }
}
