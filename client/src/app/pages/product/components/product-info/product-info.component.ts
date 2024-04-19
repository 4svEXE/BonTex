import { Component, Input } from '@angular/core';
import { Product, SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';
import { ReviewService } from '../../../../core/services/review.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent {
  @Input() product!: Product;

  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  headerNavs = [
    { label: 'Опис', link: 'description' },
    { label: 'Оплата', link: 'payment' },
    { label: 'Повернення та обмін', link: 'returns-exchanges' },
    { label: 'Доставка', link: 'delivery' },
    { label: 'Відгуки', link: 'reviews' },
  ];
  currentNav = 'description';

  reviews = 0;

  constructor(
    private svgService: SvgService,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.getReviewsCountByProductId(this.product.id);
  }

  setCurrentNav(nav: string) {
    if (nav === this.currentNav) {
      this.currentNav = '';
    } else {
      this.currentNav = nav;
    }
  }

  getReviewsCountByProductId(id: string) {
    this.reviewService.getReviewsCountByProductId(id).subscribe((length) => {
      this.reviews = length;
    });
  }
}
