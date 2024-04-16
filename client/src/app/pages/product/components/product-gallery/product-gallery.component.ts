import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
})
export class ProductGalleryComponent implements OnChanges {
  @Input() alt: string = '';
  @Input() photos: string[] = [];
  currentPhoto!: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['photos'] && changes['photos'].currentValue) {
      this.currentPhoto = changes['photos'].currentValue[0];
      this.photos.length = 5
    }
  }

  changePhoto(photo: string) {
    this.currentPhoto = photo;
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
    autoHeight: true
  };
}
