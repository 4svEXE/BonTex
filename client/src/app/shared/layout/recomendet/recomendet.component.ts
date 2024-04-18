import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';
import { RecomendetOwlOptions } from 'src/app/core/variables/carouselOptions';

@Component({
  selector: 'app-recomendet',
  templateUrl: './recomendet.component.html',
  styleUrls: ['./recomendet.component.scss', '../../styles/a-secondary.scss'],
})
export class RecomendetComponent {
  customOptions: OwlOptions = RecomendetOwlOptions;

  products: Product[] = [];

  currentGroup: string = 'hit';
  private sub!: Subscription;

  buttons: { label: string; group: string }[] = [
    { label: 'Хіти продажу', group: 'hit' },
    { label: 'Новинки', group: 'new' },
    { label: 'Топ акції', group: 'promotion' },
    { label: 'Ми рекомендуємо', group: 'recommendation' },
  ];

  constructor(private productService: ProductService) {}

  getProductsByGroup(group: string) {
    this.currentGroup = group;

    this.sub = this.productService
      .getProductsByGroup(group)
      .subscribe((products) => {
        this.products = products;
      });
  }

  ngOnInit() {
    this.getProductsByGroup(this.currentGroup);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
