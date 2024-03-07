import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-first-banner',
  templateUrl: './first-banner.component.html',
  styleUrls: ['./first-banner.component.scss'],
})
export class FirstBannerComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    // navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>'],
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
    // nav: true,

  };
}
