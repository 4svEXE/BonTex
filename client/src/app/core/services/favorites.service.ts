import { Injectable } from '@angular/core';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }

  getProducts(): Product[]{
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  setProducts(products: Product[]){
    localStorage.setItem('favorites', JSON.stringify(products));
  }

  addProduct(product: Product) {
    let favorites = this.getProducts();
    favorites.push(product);
    this.setProducts(favorites);
  }

  removeProduct(product: Product) {
    let favorites = this.getProducts();
    favorites = favorites.filter(p => p.id !== product.id);
    this.setProducts(favorites);
  }
}
