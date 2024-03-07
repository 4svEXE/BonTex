import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-first-banner',
  templateUrl: './first-banner.component.html',
  styleUrls: ['./first-banner.component.scss'],
})
export class FirstBannerComponent {
  imgPath: string = 'assets/img/pages/home/';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };
}
