import { Injectable } from '@angular/core';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductFiltersService {
  constructor() {}

  sortProducts(products: Product[], sortBy: string) {
    switch (sortBy) {
      case 'byRating':
        return products.sort((a, b) => {
          return b.popularity_rating - a.popularity_rating;
        });
      case 'cheapToExpensive':
        return products.sort((a, b) => {
          return a.currentPrice - b.currentPrice;
        });
      case 'expensiveToCheap':
        return products.sort((a, b) => {
          return b.currentPrice - a.currentPrice;
        });
      case 'newArrivals':
        return products.sort((a, b) => {
          if (a.group === 'new' && b.group !== 'new') {
            return -1;
          } else if (a.group !== 'new' && b.group === 'new') {
            return 1;
          } else {
            return 0;
          }
        });
      case 'bestSellers':
        return products.sort((a, b) => {
          if (a.group === 'hit' && b.group !== 'hit') {
            return -1;
          } else if (a.group !== 'hit' && b.group === 'hit') {
            return 1;
          } else {
            return 0;
          }
        });
      default:
        return products;
    }
  }
}
