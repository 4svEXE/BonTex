import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/shared/services/svg.service';

@Component({
  selector: 'app-recomendet',
  templateUrl: './recomendet.component.html',
  styleUrls: ['./recomendet.component.scss'],
})
export class RecomendetComponent {
  imgPath: string = 'assets/img/pages/home/products/';
  safeSvgCodes: { [key: string]: SafeHtml } = {};

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

  constructor(private svgService: SvgService) {}

  ngOnInit(): void {
    this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }

  isFav: boolean = false;

  toggleFavorite() {
    this.isFav = !this.isFav;
  }
}
