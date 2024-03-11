import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/shared/services/svg.service';

@Component({
  selector: 'app-reviews-home-page',
  templateUrl: './reviews-home-page.component.html',
  styleUrls: ['./reviews-home-page.component.scss'],
})
export class ReviewsHomePageComponent {
  safeSvgCodes: { [key: string]: SafeHtml } = {};

  constructor(private svgService: SvgService) {}

  ngOnInit(): void {
    this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }

  isOpenReview: boolean = false;

  toggleIsOpenReview() {
    this.isOpenReview = !this.isOpenReview;
  }

  reviews: Review[] = [
    {
      username: 'Тетяна',
      publicationDate: '12.22.2023',
      content:
        'Магазин килимів - справжнє відкриття! Вражаючий вибір високоякісних килимів, що вражають різноманіттям стилів та дизайнів. Обслуговування на високому рівні, де кожен працівник виявився професіоналом. Вдала покупка перевершила мої очікування - отримав точно те, що шукав. Дякую за приємний досвід покупки, рекомендую цей магазин як надійного партнера у виборі ідеального килима для вашого простору. Неперевершений вибір, висока якість та привітний персонал - ось, що робить цей магазин винятковим. Впевнено рекомендую усім, хто цінує комфорт і стиль у своєму житлі!',
    },
    {
      username: 'Тетяна',
      publicationDate: '12.22.2023',
      content:
        'Магазин килимів - справжнє відкриття! Вражаючий вибір високоякісних килимів, що вражають різноманіттям стилів та дизайнів. Обслуговування на високому рівні, де кожен працівник виявився професіоналом. Вдала покупка перевершила мої очікування - отримав точно те, що шукав. Дякую за приємний досвід покупки, рекомендую цей магазин як надійного партнера у виборі ідеального килима для вашого простору. Неперевершений вибір, висока якість та привітний персонал - ось, що робить цей магазин винятковим. Впевнено рекомендую усім, хто цінує комфорт і стиль у своєму житлі!',
    },
    {
      username: 'Тетяна',
      publicationDate: '12.22.2023',
      content:
        'Магазин килимів - справжнє відкриття! Вражаючий вибір високоякісних килимів, що вражають різноманіттям стилів та дизайнів. Обслуговування на високому рівні, де кожен працівник виявився професіоналом. Вдала покупка перевершила мої очікування - отримав точно те, що шукав. Дякую за приємний досвід покупки, рекомендую цей магазин як надійного партнера у виборі ідеального килима для вашого простору. Неперевершений вибір, висока якість та привітний персонал - ось, що робить цей магазин винятковим. Впевнено рекомендую усім, хто цінує комфорт і стиль у своєму житлі!',
    },
  ];

  // ///////////////////

  imgPath: string = 'assets/img/pages/home/';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      `<img src="${
        this.imgPath + 'arrow_carousel.svg'
      }" alt="arrow-left" class="arrow-left"/>`,
      `<img src="${this.imgPath + 'arrow_carousel.svg'}" alt="arrow-right" />`,
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}

export interface Review {
  username: string;
  publicationDate: string;
  content: string;
}
