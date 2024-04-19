import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/interfaces';

@Component({
  selector: 'app-product-info-pages',
  templateUrl: './product-info-pages.component.html',
  styleUrls: [],
})
export class ProductInfoPagesComponent {
  @Input() currentNav!: string;
  @Input() product!: Product;
}
