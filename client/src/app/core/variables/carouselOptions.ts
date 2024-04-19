import { OwlOptions } from "ngx-owl-carousel-o";

const arrowPath = 'assets/img/pages/home/arrow_carousel.svg';

export const RecomendetOwlOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: [
    `<img src="${arrowPath}" alt="prew" class="arrow-left"/>`,
    `<img src="${arrowPath}" alt="next" />`,
  ],
  responsive: {
    0: {
      items: 1,
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

export const ReviewOwlOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  nav: true,
  navSpeed: 700,
  navText: [
    `<img src="${arrowPath}" alt="prev" class="arrow-left"/>`,
    `<img src="${arrowPath}" alt="next" />`,
  ],
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    740: {
      items: 3,
    },
    940: {
      items: 4,
    },
  },
};
