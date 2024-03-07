import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-recomendet',
  templateUrl: './recomendet.component.html',
  styleUrls: ['./recomendet.component.scss'],
})
export class RecomendetComponent {
  imgPath: string = 'assets/img/pages/home/';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      `<img src="${this.imgPath + 'arrow_carousel.svg'}" alt="arrow-left" class="arrow-left"/>`,
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
