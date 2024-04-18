import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product, Products } from 'src/app/core/variables';
import { RecomendetOwlOptions } from 'src/app/core/variables/carouselOptions';

@Component({
  selector: 'app-recomendet',
  templateUrl: './recomendet.component.html',
  styleUrls: [
    './recomendet.component.scss',
    '../../styles/a-secondary.scss'
  ],
})
export class RecomendetComponent {
  products: Product[] = Products;

  customOptions: OwlOptions = RecomendetOwlOptions;
}
