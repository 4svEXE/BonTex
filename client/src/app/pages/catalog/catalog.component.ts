import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';

import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  products: Product[] = [];
  productsToDisplay: Product[] = [];

  category!: string;
  private sub!: Subscription;

  // TODO розприділити це все по окремих компонентах
  options = [
    { label: 'Від дешевих до дорогих', value: 'catalog', selected: true },
    { label: 'Від дорогих до дешевих', value: 'rugs' },
    { label: 'За рейтингом', value: 'rugs' },
    { label: 'Новинки', value: 'rugs' },
    { label: 'Хіти', value: 'promotions' },
  ];

  selectedFilters = [
    { label: 'Від дешевих до дорогих' },
    { label: 'Від дорогих до дешевих' },
    { label: 'За рейтингом' },
    { label: 'Новинки' },
  ];

  sizesOptions = [
    { label: '80x300', count: 9, isChecked: true },
    { label: '180x300', count: 3, isChecked: false },
    { label: '380x300', count: 1, isChecked: false },
  ];

  formGroup = new FormGroup({
    filterSelect: new FormControl(this.options[0].value),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private svgService: SvgService
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      if (params['category']) {
        this.getProductsByCategoty(params['category']);
        return;
      }

      if (params['searchString']) {
        this.searchProducts(params['searchString']);
        return;
      }

      // this.sortByCategory(params['category']);

      return this.getProducts();
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  searchProducts(searchString: string) {
    this.productService
      .findProductsBySearchString(searchString)
      .subscribe((products) => {
        this.products = products;
      });
  }

  getProductsByCategoty(category: string) {
    this.productService
      .getProductsByCategory(category)
      .subscribe((products) => {
        this.products = products;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
