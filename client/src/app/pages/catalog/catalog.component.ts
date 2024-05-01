import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';

import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces';
import { ProductFiltersService } from 'src/app/core/services/product-filters.service';

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

  selectedFilter: string = '';

  // TODO розприділити це все по окремих компонентах

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private svgService: SvgService,
    private filterService: ProductFiltersService
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

  onSelectedFilterChange(filterValue: string): void {
    this.selectedFilter = filterValue;
    this.sortProducts();
  }

  sortProducts() {
    this.products = this.filterService.sortProducts(
      this.products,
      this.selectedFilter
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
