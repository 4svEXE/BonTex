import { Component, Input } from '@angular/core';
import { Product, SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() product!: Product;
  safeSvg: SafeSvg = this.svg.getSafeSvgCodes();
  options = {
    size: '',
  };
  constructor(private svg: SvgService) {}

  ngOnInit() {
    this.initOptions();
  }

  initOptions() {
    this.options = {
      size: this.product.sizes[0].size,
    };
  }
}
