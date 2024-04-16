import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/interfaces';

@Component({
  selector: 'app-product-properties',
  templateUrl: './product-properties.component.html',
  styleUrls: ['./product-properties.component.scss'],
})
export class ProductPropertiesComponent {
  @Input() product!: Product;

  propertyClassName = `
    property border-b lg:border-b-0
    mr-0 lg:mr-10 justify-between
    w-full lg:w-fit
    lg:flex-col
  `;

}
