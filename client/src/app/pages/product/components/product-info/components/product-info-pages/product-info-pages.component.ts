import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-info-pages',
  templateUrl: './product-info-pages.component.html',
  styleUrls: [],
})
export class ProductInfoPagesComponent {
  @Input() currentNav!: string;
  @Input() description!: string;
}
