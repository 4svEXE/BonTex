import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

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
}
